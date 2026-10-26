import { useState } from 'react'

type IconName = 'arrow' | 'calendar' | 'clock' | 'location' | 'menu' | 'play' | 'users' | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    play: <path d="m9 7 8 5-8 5V7Z"/>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    x: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const services = [
  { day: 'SUN', date: '10:00', title: 'Sunday Worship', note: 'Celebration service & children’s church' },
  { day: 'WED', date: '18:30', title: 'Manna Water', note: 'Prayer, teaching and spiritual renewal' },
  { day: 'FRI', date: '23:00', title: 'Power Must Change Hands', note: 'First Friday of every month' },
]

type PageKey = 'home' | 'about' | 'education' | 'broadcast' | 'events' | 'testimonials' | 'programme' | 'community' | 'news' | 'videos' | 'gallery' | 'contact'

const pages: Record<Exclude<PageKey, 'home'>, { eyebrow: string; title: string; intro: string; image: string; items: { title: string; text: string }[] }> = {
  about: { eyebrow: 'Who we are', title: 'Faith with fire. Love in action.', intro: 'MFM Edinburgh is a full gospel family committed to prayer, holiness, and the transforming power of Jesus Christ.', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Our vision', text: 'To raise a community of believers equipped to live victorious, purpose-filled lives.' }, { title: 'Our mission', text: 'To share the gospel, train hands for spiritual warfare, and serve our city with compassion.' }, { title: 'Our family', text: 'One church made richer by many cultures, generations, and stories of grace.' }] },
  education: { eyebrow: 'Grow deeper', title: 'Truth for everyday life.', intro: 'Practical, Bible-centred learning designed to strengthen your faith and equip every generation.', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Bible school', text: 'Build a strong foundation through structured teaching and guided study.' }, { title: 'Children & youth', text: 'Safe, engaging spaces where young people discover faith for themselves.' }, { title: 'Discipleship', text: 'Take your next step through mentoring, small groups, and spiritual formation.' }] },
  broadcast: { eyebrow: 'Watch & listen', title: 'A word for your week.', intro: 'Catch up on teaching, prayer broadcasts, and moments from our worship gatherings.', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Sunday message', text: 'Fresh, practical teaching from our weekly worship service.' }, { title: 'Prayer broadcast', text: 'Join focused prayer wherever you are, throughout the week.' }, { title: 'Pastor’s corner', text: 'Biblical encouragement and insight for your daily walk.' }] },
  events: { eyebrow: 'What’s happening', title: 'There is a place for you.', intro: 'From worship nights to community gatherings, life is better when we gather together.', image: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=1600&q=85', items: services.map(s => ({ title: s.title, text: `${s.day} · ${s.date} — ${s.note}` })) },
  testimonials: { eyebrow: 'Stories of grace', title: 'God is still moving.', intro: 'Real stories from people whose lives have been changed through prayer, faith, and community.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Healing', text: 'Celebrating God’s restoring power in body, mind, and spirit.' }, { title: 'Breakthrough', text: 'Stories of answered prayer and doors opened by faith.' }, { title: 'New beginnings', text: 'Lives made new and hope rediscovered in Jesus.' }] },
  programme: { eyebrow: 'Weekly rhythm', title: 'Make room for renewal.', intro: 'Join us throughout the week for worship, teaching, prayer, and fellowship.', image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=85', items: services.map(s => ({ title: s.title, text: `${s.day} at ${s.date} · ${s.note}` })) },
  community: { eyebrow: 'Edinburgh & beyond', title: 'Love must leave the building.', intro: 'We serve our neighbours with practical care, meaningful partnership, and the hope of the gospel.', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Community care', text: 'Practical support for individuals and families facing difficult seasons.' }, { title: 'Local partnerships', text: 'Working with others to create lasting good across Edinburgh.' }, { title: 'Volunteer', text: 'Use your time and gifts to make a tangible difference.' }] },
  news: { eyebrow: 'Latest updates', title: 'Stay in the story.', intro: 'Announcements, reflections, and news from across the MFM Edinburgh family.', image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'This week at MFM', text: 'Everything you need to know for our next gathering.' }, { title: 'Monthly focus', text: 'Prayer points and encouragement for the month ahead.' }, { title: 'Community update', text: 'See how your generosity and service are making an impact.' }] },
  videos: { eyebrow: 'Video gallery', title: 'Watch faith come alive.', intro: 'Messages, worship, testimonies, and highlights from the life of our church.', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Latest message', text: 'Watch this week’s teaching from MFM Edinburgh.' }, { title: 'Worship moments', text: 'Revisit powerful moments from our gatherings.' }, { title: 'Testimony stories', text: 'See and hear what God is doing in our community.' }] },
  gallery: { eyebrow: 'Picture gallery', title: 'Life together, captured.', intro: 'A glimpse into our worship, fellowship, outreach, and shared life as one church family.', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Sunday gatherings', text: 'Worship, Word, prayer, and joyful fellowship.' }, { title: 'Special events', text: 'Conferences, celebrations, and unforgettable encounters.' }, { title: 'Serving Edinburgh', text: 'Our church family putting love into action.' }] },
  contact: { eyebrow: 'Get in touch', title: 'We would love to hear from you.', intro: 'Questions, prayer requests, or planning a visit? Our team is ready to help.', image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1600&q=85', items: [{ title: 'Call us', text: '07557 644650' }, { title: 'Email us', text: 'info@mfmedinburgh.org' }, { title: 'Visit us', text: 'Edinburgh, Scotland · Sunday worship at 10:00 AM' }] },
}

function InnerPage({ page, go, onPlay }: { page: Exclude<PageKey, 'home'>; go: (page: PageKey) => void; onPlay: () => void }) {
  const content = pages[page]
  const directory: [string, PageKey][] = [['Church programme','programme'],['Community','community'],['News','news'],['Testimonials','testimonials'],['Videos','videos'],['Gallery','gallery']]
  return <>
    <section className="page-hero">
      <div className="page-hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(33,4,49,.95),rgba(45,7,61,.48)),url('${content.image}')` }} />
      <div className="page-hero-copy">
        <p className="kicker light">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </div>
      <div className="page-index">MFM / {page}</div>
    </section>
    <section className="page-body section">
      <div className="page-intro"><p className="kicker">Explore</p><h2>Find your next step.</h2></div>
      <div className="feature-grid">
        {content.items.map((item, index) => (
          <article className="feature-card" key={item.title}>
            <span>0{index + 1}</span>
            {['broadcast','videos'].includes(page) && <button onClick={onPlay} aria-label={`Play ${item.title}`}><Icon name="play" /></button>}
            <h3>{item.title}</h3><p>{item.text}</p>
            <a href="mailto:info@mfmedinburgh.org">Learn more <Icon name="arrow" size={17} /></a>
          </article>
        ))}
      </div>
    </section>
    <section className="site-directory">
      <p>More from MFM Edinburgh</p>
      <div>{directory.map(([label,key]) => <button className={page === key ? 'current' : ''} onClick={() => go(key)} key={key}>{label}<Icon name="arrow" size={16}/></button>)}</div>
    </section>
    <section className="inner-cta">
      <div><p className="kicker light">Connect with us</p><h2>You don’t have to journey alone.</h2></div>
      <button className="button white" onClick={() => go('contact')}>Get in touch <Icon name="arrow"/></button>
    </section>
  </>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [page, setPage] = useState<PageKey>('home')
  const go = (next: PageKey) => {
    setPage(next)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); go('home') }} aria-label="MFM Edinburgh home">
          <img src="https://mfmedinburgh.org/assets/logo/logo1.gif" alt="MFM logo" />
          <span><strong>MFM</strong><small>Edinburgh</small></span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {([['Home','home'],['About','about'],['Education','education'],['Events','events'],['Broadcast','broadcast'],['Contact','contact']] as [string,PageKey][]).map(([label,key]) => (
            <a key={key} href={`#${key}`} onClick={(event) => { event.preventDefault(); go(key) }} className={page === key ? 'active' : ''}>{label}</a>
          ))}
          <a className="nav-cta" href="#visit" onClick={(event) => { if(page !== 'home'){ event.preventDefault(); go('home'); setTimeout(() => document.querySelector('#visit')?.scrollIntoView(), 50) } }}>Plan a visit <Icon name="arrow" size={17} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </header>

      {page === 'home' ? <>
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Welcome to MFM Edinburgh</div>
          <h1>A place to encounter <em>God’s power.</em></h1>
          <p>Join a vibrant family of faith devoted to prayer, purpose and the transforming power of Jesus Christ.</p>
          <div className="hero-actions">
            <a className="button primary" href="#visit">Join us this Sunday <Icon name="arrow" /></a>
            <button className="watch" onClick={() => setVideoOpen(true)}><span><Icon name="play" size={18} /></span> Watch latest message</button>
          </div>
        </div>
        <div className="service-ribbon">
          <div><Icon name="calendar" /><span><small>Next gathering</small><strong>Sunday Worship</strong></span></div>
          <div><Icon name="clock" /><span><small>Service time</small><strong>10:00 AM</strong></span></div>
          <div><Icon name="location" /><span><small>Find us</small><strong>Edinburgh, Scotland</strong></span></div>
          <a href="#visit">Get directions <Icon name="arrow" size={18} /></a>
        </div>
        <a className="scroll" href="#welcome"><span /> Scroll to explore</a>
      </section>

      <section className="welcome section" id="welcome">
        <div className="section-label">01 — You belong here</div>
        <div className="welcome-copy">
          <p className="kicker">More than a church</p>
          <h2>Welcome home.</h2>
          <p className="lead">Wherever you are on your journey, there’s a place for you here.</p>
          <p>We are a full gospel ministry devoted to the revival of apostolic signs, Holy Ghost power, and the unlimited demonstration of God’s ability to deliver to the uttermost.</p>
          <a className="text-link" href="#about">Discover our story <Icon name="arrow" size={18} /></a>
        </div>
        <div className="welcome-image">
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85" alt="A joyful, welcoming community gathered together" />
          <div className="image-note"><strong>Everyone</strong><span>has a place at the table.</span></div>
        </div>
      </section>

      <section className="gatherings section" id="events">
        <div className="gatherings-head">
          <div><p className="kicker light">Come as you are</p><h2>Gather with us.</h2></div>
          <p>Faith grows in community. Make room in your week to worship, pray, and be renewed together.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <a href="#visit" className="service-row" key={service.title}>
              <span className="number">0{index + 1}</span>
              <span className="date"><b>{service.day}</b>{service.date}</span>
              <span className="service-name"><strong>{service.title}</strong><small>{service.note}</small></span>
              <span className="row-arrow"><Icon name="arrow" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="mission section" id="about">
        <div className="mission-image">
          <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=85" alt="Church community worshipping together" />
          <button aria-label="Play our story" onClick={() => setVideoOpen(true)}><Icon name="play" size={24} /></button>
        </div>
        <div className="mission-copy">
          <p className="kicker">Our mission</p>
          <h2>Pray. Grow.<br /><em>Make an impact.</em></h2>
          <p>We exist to help people discover freedom in Christ, grow through the Word, and bring hope to Edinburgh and beyond.</p>
          <div className="stats">
            <div><Icon name="users" /><strong>One family</strong><span>Many nations</span></div>
            <div><Icon name="location" /><strong>One mission</strong><span>Transform lives</span></div>
          </div>
          <a className="button dark" href="#ministries">Explore our ministries <Icon name="arrow" /></a>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div>
          <p className="kicker light">Your next step</p>
          <h2>We saved you a seat.</h2>
          <p>Walking into a new church can feel like a big step. We’ll make your first visit simple, warm and welcoming.</p>
        </div>
        <a className="button white" href="mailto:info@mfmedinburgh.org">Plan your visit <Icon name="arrow" /></a>
      </section>
      </> : <InnerPage page={page} go={go} onPlay={() => setVideoOpen(true)} />}

      <footer id="contact">
        <div className="footer-brand">MFM <span>Edinburgh</span></div>
        <div><small>Connect</small><a href="tel:+447557644650">07557 644650</a><a href="mailto:info@mfmedinburgh.org">info@mfmedinburgh.org</a></div>
        <div><small>Explore</small><a href="#about" onClick={(e) => {e.preventDefault();go('about')}}>About us</a><a href="#programme" onClick={(e) => {e.preventDefault();go('programme')}}>Church programme</a><a href="#broadcast" onClick={(e) => {e.preventDefault();go('broadcast')}}>Messages</a></div>
        <p>© 2025 MFM Edinburgh<br />Made for faith. Built for community.</p>
      </footer>

      {videoOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Latest message">
          <button onClick={() => setVideoOpen(false)} aria-label="Close video"><Icon name="x" /></button>
          <div><span><Icon name="play" size={34} /></span><h3>Latest message</h3><p>Video broadcast coming soon.</p></div>
        </div>
      )}
    </main>
  )
}
