* {
  box-sizing: border-box;
}

:root {
  --bg: #f5faf6;
  --panel: #ffffff;
  --panel-soft: #f2f8f4;
  --primary: #2c8d5f;
  --primary-deep: #236f4a;
  --primary-soft: #dff4e6;
  --border: #dfece3;
  --text: #1e2a23;
  --muted: #607169;
  --shadow: 0 20px 38px rgba(18, 52, 35, 0.08);
  --success: #39a76b;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #edf8f1 0%, #f8fbf9 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.dashboard-shell {
  max-width: 1500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  gap: 22px;
}

.sidebar {
  width: 280px;
  padding: 24px 18px;
  border: 1px solid rgba(100, 135, 116, 0.18);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 8px 22px;
  border-bottom: 1px solid var(--border);
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: white;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary) 0%, #59b27a 100%);
}

.eyebrow {
  display: block;
  letter-spacing: 0.12em;
  font-size: 0.62rem;
  text-transform: uppercase;
  color: var(--muted);
}

.brand-row h2,
.topbar h1,
.section-head h3 {
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.nav-item {
  border: 1px solid transparent;
  background: transparent;
  color: var(--text);
  border-radius: 14px;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  transition: 0.2s ease;
}

.nav-item.active {
  background: var(--primary-soft);
  border-color: rgba(44, 141, 95, 0.15);
}

.nav-item .icon {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(44, 141, 95, 0.08);
  color: var(--primary-deep);
}

.mini-panel {
  margin-top: 26px;
  padding: 16px;
  border-radius: 18px;
  background: var(--panel-soft);
  border: 1px solid var(--border);
}

.mini-label {
  display: block;
  margin-bottom: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.mini-stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid var(--border);
}

.mini-stat-row:first-of-type {
  border-top: none;
}

.mini-stat-row strong {
  color: var(--primary-deep);
  font-size: 1.2rem;
}

.mini-stat-row span {
  color: var(--muted);
  font-size: 0.88rem;
}

.main-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 10px 6px 0;
}

.topbar h1 {
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.secondary-btn,
.chip-btn,
.quick-actions button {
  border: none;
  border-radius: 12px;
  font-weight: 600;
}

.secondary-btn {
  background: var(--primary-soft);
  color: var(--primary-deep);
  padding: 10px 15px;
}

.chip-btn {
  background: #edf5f0;
  color: var(--primary-deep);
  padding: 8px 12px;
}

.profile-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 24px rgba(30, 67, 47, 0.05);
}

.avatar {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #dff4e6, #bfe5d0);
  color: var(--primary-deep);
  font-weight: 700;
}

.profile-box strong,
.profile-box span {
  display: block;
}

.profile-box span {
  font-size: 0.76rem;
  color: var(--muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card,
.panel {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(100, 135, 116, 0.18);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 18px 18px 16px;
}

.stat-label,
.stat-card small {
  display: block;
}

.stat-label {
  color: var(--muted);
  font-weight: 600;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  margin: 12px 0 4px;
}

.stat-card small {
  color: var(--primary-deep);
  font-weight: 700;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
}

.lower-grid {
  align-items: stretch;
}

.panel {
  padding: 20px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.chart-wrap {
  height: 280px;
}

.chart-wrap.small {
  height: 240px;
}

.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quick-actions button {
  padding: 14px 16px;
  background: var(--panel-soft);
  color: var(--text);
  border: 1px solid var(--border);
  text-align: left;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.course-card {
  padding: 16px;
  border-radius: 18px;
  border: 1px solid rgba(20, 52, 35, 0.06);
}

.course-card.green {
  background: #dff4e6;
}

.course-card.mint {
  background: #eaf7d9;
}

.course-card.pale-blue {
  background: #e0edf8;
}

.course-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
}

.course-top h4 {
  margin: 0;
  font-size: 1.05rem;
}

.course-tag {
  display: inline-flex;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: var(--primary-deep);
  font-size: 0.72rem;
  font-weight: 700;
}

.course-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.course-meta label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.progress-bar {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary) 0%, #5ec084 100%);
}

.table-toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.table-toolbar input,
.table-toolbar select {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.8);
}

.table-toolbar input {
  flex: 1;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
  font-size: 0.95rem;
}

th {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  background: #ebf5ee;
  color: var(--primary-deep);
}

.status-pill.late {
  background: #fff2dd;
  color: #9f6b1f;
}

.status-pill.absent {
  background: #fdeaea;
  color: #af4a4a;
}

.settings-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: #fafcfb;
}

.setting-row span {
  color: var(--muted);
  font-weight: 600;
}

.setting-row strong {
  color: var(--text);
}

@media (max-width: 1180px) {
  .dashboard-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}

@media (max-width: 900px) {
  .stats-grid,
  .content-grid,
  .course-list,
  .settings-list {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar-actions {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
