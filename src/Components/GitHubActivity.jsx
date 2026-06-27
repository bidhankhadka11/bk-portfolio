import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { FiArrowRight } from 'react-icons/fi'

// Amber contribution scale (empty → most active) matching the site accent
const calendarTheme = {
  dark: ['#161616', '#3a2e12', '#7a5a16', '#c2901f', '#ffc04c'],
}

export default function GitHubActivity({ username, profileUrl }) {
  const [stats, setStats] = useState(null)
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ])
        if (!userRes.ok || !reposRes.ok) return // rate-limited / not found → degrade

        const user = await userRes.json()
        const repos = await reposRes.json()
        if (cancelled || !Array.isArray(repos)) return

        const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        setStats({ repos: user.public_repos, followers: user.followers, stars })

        // Top languages by number of repos
        const counts = {}
        repos.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] || 0) + 1
        })
        const total = Object.values(counts).reduce((a, b) => a + b, 0)
        if (total > 0) {
          setLanguages(
            Object.entries(counts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }))
          )
        }
      } catch {
        /* network error: leave stats/languages empty so the blocks stay hidden */
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  const profile = profileUrl || `https://github.com/${username}`

  return (
    <div className="github-activity">
      {stats && (
        <div className="gh-stats">
          <div className="gh-stat">
            <span className="gh-stat-num">{stats.repos}</span>
            <span className="gh-stat-label">Public repos</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-num">{stats.stars}</span>
            <span className="gh-stat-label">Total stars</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-num">{stats.followers}</span>
            <span className="gh-stat-label">Followers</span>
          </div>
        </div>
      )}

      <div className="gh-cal">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          theme={calendarTheme}
          fontSize={13}
          blockSize={12}
          blockMargin={4}
        />
      </div>

      {languages.length > 0 && (
        <div className="gh-langs">
          <h3 className="gh-langs-title">Most used languages</h3>
          {languages.map((l) => (
            <div className="gh-lang" key={l.name}>
              <div className="gh-lang-head">
                <span>{l.name}</span>
                <span>{l.pct}%</span>
              </div>
              <div className="gh-lang-bar">
                <span style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}

      <a className="gh-profile-link" href={profile} target="_blank" rel="noreferrer">
        View full profile <FiArrowRight />
      </a>
    </div>
  )
}
