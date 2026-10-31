import { useEffect, useState } from 'react'

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

// YouTube channel. The embed plays the channel's uploads playlist, so it always starts with the newest video.
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@MFMEDINBURGH'
const YOUTUBE_LATEST_EMBED = 'https://www.youtube.com/embed/videoseries?list=UU1s9pVF23PCw5VrhTAuHJiQ&autoplay=1&rel=0'

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8ZM9.6 15.1V8.9l5.8 3.1-5.8 3.1Z"/></svg>
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const ADDRESS_SHORT = '13 Bangor Road, Leith'
const ADDRESS_FULL = 'MFM Worship Centre (Zonal Headquarters), 13 Bangor Road, off Great Junction Street, Leith, Edinburgh EH6 5JY'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=13+Bangor+Road+Leith+Edinburgh+EH6+5JY'

const services = [
  { day: 'SUN', date: '09:30', title: 'Sunday Pentecostal Hour', note: '09:30 – 10:30 · Prayer before worship' },
  { day: 'SUN', date: '10:30', title: 'Sunday Worship', note: '10:30 – 13:30 · Main celebration service' },
  { day: 'TUE', date: '19:00', title: 'Spiritual Clinic, Prayer & Bible Studies', note: '19:00 – 21:00' },
  { day: 'FRI', date: '18:00', title: 'Intercessory Prayer Session', note: '18:00 – 19:00' },
]

const monthly = [
  { title: 'Power Must Change Hands', when: 'First Saturday of every month', time: '09:00 – 12:00' },
  { title: '“Meet Your Life Partner” — Singles & Youth Prayer Day', when: 'First Sunday of every month', time: '13:00 – 15:00' },
  { title: 'The Deliverance Programme', when: 'Third Saturday, every two months', time: '09:00 – 13:00' },
  { title: 'All Night Vigil', when: 'Last Friday of every month', time: '23:00 – early Saturday morning' },
]

const programme = [
  ...services.map(s => ({ when: s.day === 'SUN' ? 'Sunday' : s.day === 'TUE' ? 'Tuesday' : 'Friday', title: s.title, time: s.note.split(' · ')[0] })),
  ...monthly.map(m => ({ when: m.when, title: m.title, time: m.time })),
]

const galleryPhotos = {
  olukoya: { src: 'images/gallery/dk-olukoya.jpg', caption: 'Dr D. K. Olukoya, General Overseer, MFM Worldwide' },
  julian: { src: 'images/gallery/julian-50.jpg', caption: 'Julian, smiling at 50' },
  ministersPolice: { src: 'images/gallery/ministers-police.jpg', caption: 'Our ministers with the police' },
  youngCho: { src: 'images/gallery/young-cho.jpg', caption: 'With Young Cho' },
  projectPolice: { src: 'images/gallery/project-police.jpg', caption: 'Community project with the police' },
  interfaith: { src: 'images/gallery/interfaith-project.jpg', caption: 'Interfaith community project' },
  yousaf: { src: 'images/gallery/humza-yousaf-visit.jpg', caption: 'Humza Yousaf, then Scottish Minister for External Affairs, visiting our event' },
  bigPicture: { src: 'images/gallery/big-picture.jpg', caption: 'The Big Picture' },
  youth: { src: 'images/gallery/youth.jpg', caption: 'The youth' },
  poverty: { src: 'images/gallery/war-against-poverty.jpg', caption: 'War Against Poverty Conference' },
  minister: { src: 'images/gallery/with-the-minister.jpg', caption: 'With the Minister' },
  choir: { src: 'images/gallery/youth-choir.jpg', caption: 'Youth choir' },
}

type PageKey = 'home' | 'about' | 'education' | 'broadcast' | 'events' | 'testimonials' | 'programme' | 'community' | 'news' | 'videos' | 'gallery' | 'contact'

type PageItem = { title: string; text: string; href?: string; linkLabel?: string }
type PageSection = { heading: string; paragraphs?: string[]; list?: string[] }
type PageContent = {
  eyebrow: string; title: string; intro: string; image: string; items: PageItem[]
  sections?: PageSection[]
  schedule?: { when: string; title: string; time: string }[]
  gallery?: { src: string; caption: string }[]
}

const pages: Record<Exclude<PageKey, 'home'>, PageContent> = {
  about: {
    eyebrow: 'About us', title: 'Faith with fire. Love in action.',
    intro: 'Welcome to the online home of the Mountain of Fire and Miracles Ministries, Edinburgh, Scotland.',
    image: asset('images/gallery/big-picture.jpg'),
    items: [
      { title: 'Our mission', text: 'To propagate the gospel of our Lord Jesus Christ all over the world.' },
      { title: 'Our vision', text: 'To promote the revival of apostolic signs, wonders and miracles, and to build an aggressive, heaven-bound end-time army for the Lord.' },
      { title: 'Our name', text: 'Mountain — the place of victory. Fire — the baptism of the Holy Ghost and fire. Miracles — when you reach the mountain top and collect fire, miracles follow.' },
    ],
    sections: [
      { heading: 'Who we are', paragraphs: [
        'We are a God-friendly, non-denominational fellowship committed to raising up an army of prayer warriors, fully geared up to totally expose the activities of darkness in preparation for the coming of the end-time revival. We are deeply committed to absolute holiness as the greatest spiritual germicide and as a pre-condition for heaven.',
        'Mountain of Fire and Miracles Ministries (MFM) is a full gospel ministry devoted to the revival of apostolic signs, Holy Ghost fireworks, and the unlimited power of God to deliver to the uttermost. MFM is a do-it-yourself gospel ministry where your hands are trained to wage war and your fingers to fight. Aggressive prayer is considered an aid to spiritual focus and a check against being overwhelmed by the flesh — at the MFM Prayer City, prayer goes on 24 hours a day, 7 days a week.',
        'At MFM Edinburgh, we preach salvation, practise holiness within and without, and minister deliverance. We believe that sound Biblical knowledge is a prerequisite for good Christian living, and in bringing down the hand of God into our midst through Holy Ghost-filled praise and worship. Visit us today and experience God like never before.',
      ] },
      { heading: 'Our origin', paragraphs: [
        'Soon after completing his Ph.D. in the United Kingdom, and while working at the Nigerian Institute of Medical Research, Dr Daniel Kolawole Olukoya called a prayer meeting on a Wednesday in 1989. Twenty-four brethren gathered in his living room. At the meetings that followed, the power of God came down, verifiable miracles began to happen, and people came from far and wide to seek the face of God.',
        'The growing prayer group moved to 60 Old Yaba Road, Yaba, Lagos, and later bought an abandoned slum at 13 Olasimbo Street, Onike, Yaba, near the second gate of the University of Lagos. That site has been transformed into the International Headquarters of the Mountain of Fire and Miracles Ministries, of which Dr Olukoya is the General Overseer. The name was revealed to him in prayer, and the church held its first service on 24 April 1994.',
        'Under the direction of the Lord, MFM grew into a network of branches. International branches began in London before spreading to the United States, Canada, the rest of Europe, the Caribbean, Africa and Asia — on every continent, MFM is profoundly visible and greatly impactful.',
      ] },
      { heading: 'Our name', paragraphs: [
        'Mountain — the mountain top is a place of victory. Every serious minister of God must always be on the mountain in order to be above the power of darkness and do exploits for the Lord.',
        'Fire — “I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire” (Matthew 3:11). The baptism of fire is the best thing that can happen to anyone.',
        'Miracles — when you get to the mountain top and collect fire, miracles follow. Our tested and proven do-it-yourself approach to prayer warfare continues to provoke dumbfounding miracles and attract divine intervention in situations that had proven intractable.',
      ] },
      { heading: 'Our vision', list: [
        'To promote the revival of apostolic signs, wonders and miracles',
        'To bring together children of God who are lost in dead churches',
        'To train believers in the art and science of spiritual warfare, making them an aggressive and victorious army for the Lord',
        'To train believers to receive the Holy Ghost baptism and fire, and a daily walk and relationship with the Holy Spirit',
        'To build an aggressive end-time army for the Lord',
        'To deliver those who have become slaves to pastors, prophets and apostles',
        'To build up heaven-bound and aggressive Christians — the priority in MFM is for people to make heaven',
        'To build up prayer eagles',
        'To purify the Pentecostal dirtiness of this age',
      ] },
      { heading: 'Our belief', list: [
        'The Scriptures are the inspired Word of God, the only basis for our faith and fellowship',
        'The fall and depravity of mankind, necessitating redemption through the Blood of Jesus Christ',
        'Salvation through the redeeming work of Jesus Christ and the regenerative work of the Holy Spirit; sanctification as separation from that which is evil',
        'The Baptism of the Holy Spirit — Acts 2:4; 10:44; 19:1–6',
        'Restitution for past wrongs where possible',
        'The ordinances of the Church: the Lord’s Supper and Water Baptism',
        'The Church Universal, both visible and invisible',
        'The Ministry divinely called and scripturally ordained, as approved of Almighty God',
        'Divine healing as provided by the Lord Jesus Christ',
        'The Rapture of all believers into the Marriage Supper of the Lamb, and the second advent of the Lord Jesus Christ',
        'The Millennial Reign of Christ',
        'The Final Judgment',
        'The New Heaven and Earth',
      ] },
    ],
  },
  education: {
    eyebrow: 'Grow deeper', title: 'Keep learning. Keep growing.',
    intro: 'We believe sound Biblical knowledge is a prerequisite for good Christian living — and we encourage every member to keep learning.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=85',
    items: [
      { title: 'Bible studies', text: 'Join our Tuesday Spiritual Clinic, Prayer & Bible Studies, 19:00 – 21:00 at the church.' },
      { title: 'International Business Management Institute', text: 'Quality, low-cost education for everyone, everywhere. Start your online learning experience. Berlin, Germany.', href: 'https://www.ibm-institute.com/', linkLabel: 'Visit website' },
      { title: 'Christian Leaders Institute', text: 'Free courses that lead to award credentials, low-cost college credentials with the Christian Leaders College, or ordination with the Christian Leaders Alliance.', href: 'https://www.christianleaders.org/', linkLabel: 'Visit website' },
    ],
  },
  broadcast: {
    eyebrow: 'Watch & listen', title: 'A word for your week.',
    intro: 'Catch up on Sunday services, special programmes and moments from our worship gatherings on our YouTube channel.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=85',
    items: [
      { title: 'Sunday services', text: 'Watch our Sunday worship services in full, uploaded every week.' },
      { title: 'Special programmes', text: 'Concerts, conferences and special services from the life of the church.' },
      { title: 'Message archive', text: 'Browse every past message and broadcast on our YouTube channel.' },
    ],
  },
  events: {
    eyebrow: 'What’s happening', title: 'There is a place for you.',
    intro: 'Alongside our weekly services, these special programmes run every month at the MFM Worship Centre in Leith.',
    image: asset('images/gallery/war-against-poverty.jpg'),
    items: monthly.map(m => ({ title: m.title, text: `${m.when} · ${m.time}` })),
  },
  testimonials: {
    eyebrow: 'Stories of grace', title: 'God is still moving.',
    intro: 'Testimonies abound of the awesome greatness of the Almighty God in our services. Has God done something for you? We would love to hear it.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85',
    items: [
      { title: 'Healing', text: 'Celebrating God’s restoring power in body, mind and spirit.' },
      { title: 'Breakthrough', text: 'Stories of answered prayer and doors opened by faith.' },
      { title: 'Share your testimony', text: 'Send us your testimony and give glory to God for what He has done.', href: 'mailto:info@mfmedinburgh.org?subject=My%20testimony', linkLabel: 'Send your testimony' },
    ],
  },
  programme: {
    eyebrow: 'Church programme', title: 'Make room for renewal.',
    intro: 'All services take place at the MFM Worship Centre, 13 Bangor Road, Leith, Edinburgh EH6 5JY.',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=85',
    items: [],
    schedule: programme,
  },
  community: {
    eyebrow: 'Edinburgh & beyond', title: 'Love must leave the building.',
    intro: 'We work alongside our neighbours, local services and community leaders to bring practical help and the hope of the gospel to Edinburgh.',
    image: asset('images/gallery/ministers-police.jpg'),
    items: [
      { title: 'Working with the police', text: 'Partnering with local police on community projects.' },
      { title: 'Interfaith projects', text: 'Building understanding with people of other faiths across our city.' },
      { title: 'War Against Poverty', text: 'Bringing people together to tackle poverty in our community.' },
    ],
    gallery: [galleryPhotos.ministersPolice, galleryPhotos.projectPolice, galleryPhotos.interfaith, galleryPhotos.yousaf, galleryPhotos.poverty, galleryPhotos.bigPicture],
  },
  news: {
    eyebrow: 'Latest updates', title: 'Stay in the story.',
    intro: 'Announcements, reflections and news from across the MFM Edinburgh family.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=85',
    items: [
      { title: 'This week at MFM', text: 'Everything you need to know for our next gathering.' },
      { title: 'Monthly programmes', text: 'Power Must Change Hands, the All Night Vigil and more.', href: '#events', linkLabel: 'See events' },
      { title: 'Watch online', text: 'Missed a service? Catch up on our YouTube channel.', href: YOUTUBE_CHANNEL_URL, linkLabel: 'Watch on YouTube' },
    ],
  },
  videos: {
    eyebrow: 'Video gallery', title: 'Watch faith come alive.',
    intro: 'Messages, worship, concerts and highlights from the life of our church.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=85',
    items: [
      { title: 'Latest message', text: 'Watch this week’s service from MFM Edinburgh.' },
      { title: 'Worship moments', text: 'Revisit powerful moments from our gatherings.' },
      { title: 'Special events', text: 'Concerts, conferences and celebrations.' },
    ],
  },
  gallery: {
    eyebrow: 'Picture gallery', title: 'Life together, captured.',
    intro: 'A glimpse into our worship, fellowship, outreach and shared life as one church family.',
    image: asset('images/gallery/youth-choir.jpg'),
    items: [],
    gallery: Object.values(galleryPhotos),
  },
  contact: {
    eyebrow: 'Get in touch', title: 'We would love to hear from you.',
    intro: 'Questions, prayer requests, or planning a visit? Our team is ready to help.',
    image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1600&q=85',
    items: [
      { title: 'Call us', text: '07557 644650 · 07725 699405', href: 'tel:+447557644650', linkLabel: 'Call now' },
      { title: 'Email us', text: 'info@mfmedinburgh.org · mfmedinburgh@yahoo.co.uk', href: 'mailto:info@mfmedinburgh.org', linkLabel: 'Send an email' },
      { title: 'Visit us', text: ADDRESS_FULL, href: MAPS_URL, linkLabel: 'Get directions' },
      { title: 'Watch online', text: 'youtube.com/@MFMEDINBURGH', href: YOUTUBE_CHANNEL_URL, linkLabel: 'Watch on YouTube' },
    ],
    sections: [
      { heading: 'Pastor and ministers', list: ['07725 699405', '07912 220450', '07947 171252', '07495 130674', '+44 (0)7770 620803'] },
    ],
  },
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
      {content.schedule && (
        <div className="schedule">
          {content.schedule.map((row) => (
            <div className="schedule-row" key={row.title}>
              <span className="schedule-when">{row.when}</span>
              <strong>{row.title}</strong>
              <span className="schedule-time">{row.time}</span>
            </div>
          ))}
        </div>
      )}
      {content.items.length > 0 && (
        <div className={content.items.length === 4 ? 'feature-grid two-col' : 'feature-grid'}>
          {content.items.map((item, index) => {
            const isVideo = ['broadcast','videos'].includes(page)
            const href = item.href ?? (isVideo ? YOUTUBE_CHANNEL_URL : 'mailto:info@mfmedinburgh.org')
            const label = item.linkLabel ?? (isVideo ? 'Watch on YouTube' : 'Learn more')
            const external = href.startsWith('http')
            const internal = href.startsWith('#') ? (href.slice(1) as PageKey) : null
            return (
              <article className="feature-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {isVideo && <button onClick={onPlay} aria-label={`Play ${item.title}`}><Icon name="play" /></button>}
                <h3>{item.title}</h3><p>{item.text}</p>
                {page !== 'about' && <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} onClick={internal ? (event) => { event.preventDefault(); go(internal) } : undefined}>{label} <Icon name="arrow" size={17} /></a>}
              </article>
            )
          })}
        </div>
      )}
      {content.sections && (
        <div className="page-sections">
          {content.sections.map((section) => (
            <section className="page-section" key={section.heading}>
              <h3>{section.heading}</h3>
              <div>
                {section.paragraphs?.map((text) => <p key={text.slice(0, 40)}>{text}</p>)}
                {section.list && <ul>{section.list.map((text) => <li key={text}>{text}</li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
      )}
      {content.gallery && (
        <div className="photo-grid">
          {content.gallery.map((photo) => (
            <figure key={photo.src}>
              <img src={asset(photo.src)} alt={photo.caption} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
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
  useEffect(() => {
    if (!videoOpen) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setVideoOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [videoOpen])
  const go = (next: PageKey) => {
    setPage(next)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); go('home') }} aria-label="MFM Edinburgh home">
          <img src={asset('images/mfm-logo-round.png')} alt="MFM logo" />
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
          <div><Icon name="clock" /><span><small>Service time</small><strong>10:30 AM</strong></span></div>
          <div><Icon name="location" /><span><small>Find us</small><strong>{ADDRESS_SHORT}</strong></span></div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Get directions <Icon name="arrow" size={18} /></a>
        </div>
        <a className="scroll" href="#welcome"><span /> Scroll to explore</a>
      </section>

      <section className="welcome section" id="welcome">
        <div className="section-label">01 — You belong here</div>
        <div className="welcome-copy">
          <p className="kicker">More than a church</p>
          <h2>Welcome home.</h2>
          <p className="lead">Wherever you are on your journey, there’s a place for you here.</p>
          <p>MFM is a full gospel ministry devoted to the revival of apostolic signs, Holy Ghost fireworks, and the unlimited demonstration of the power of God to deliver to the uttermost. Absolute holiness within and without is taught openly — and here, your hands are trained to wage war and your fingers to do battle.</p>
          <a className="text-link" href="#about" onClick={(event) => { event.preventDefault(); go('about') }}>Discover our story <Icon name="arrow" size={18} /></a>
        </div>
        <div className="welcome-image">
          <img src={asset('images/gallery/julian-50.jpg')} alt="The MFM Edinburgh congregation gathered in worship" />
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
        <a className="text-link light" href="#programme" onClick={(event) => { event.preventDefault(); go('programme') }}>See the full church programme <Icon name="arrow" size={18} /></a>
      </section>

      <section className="mission section" id="about">
        <div className="mission-image">
          <img src={asset('images/gallery/big-picture.jpg')} alt="MFM Edinburgh choir performing on stage at The Big Picture event" />
          <button aria-label="Play our story" onClick={() => setVideoOpen(true)}><Icon name="play" size={24} /></button>
        </div>
        <div className="mission-copy">
          <p className="kicker">Our mission</p>
          <h2>Pray. Grow.<br /><em>Make an impact.</em></h2>
          <p>To propagate the gospel of our Lord Jesus Christ all over the world — preaching salvation, practising holiness within and without, and ministering deliverance here in Edinburgh.</p>
          <div className="stats">
            <div><Icon name="users" /><strong>One family</strong><span>Many nations</span></div>
            <div><Icon name="location" /><strong>One mission</strong><span>Transform lives</span></div>
          </div>
          <a className="button dark" href="#programme" onClick={(event) => { event.preventDefault(); go('programme') }}>See our church programme <Icon name="arrow" /></a>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div>
          <p className="kicker light">Your next step</p>
          <h2>We saved you a seat.</h2>
          <p>Walking into a new church can feel like a big step. We’ll make your first visit simple, warm and welcoming. Join us on Sundays from 09:30 at the MFM Worship Centre, 13 Bangor Road, off Great Junction Street, Leith, Edinburgh EH6 5JY.</p>
        </div>
        <a className="button white" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Get directions <Icon name="arrow" /></a>
      </section>
      </> : <InnerPage page={page} go={go} onPlay={() => setVideoOpen(true)} />}

      <footer id="contact">
        <div className="footer-brand">MFM <span>Edinburgh</span></div>
        <div><small>Connect</small><a href="tel:+447557644650">07557 644650</a><a href="tel:+447725699405">07725 699405</a><a href="mailto:info@mfmedinburgh.org">info@mfmedinburgh.org</a><a className="footer-youtube" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer"><YouTubeIcon size={16} /> YouTube</a></div>
        <div><small>Explore</small><a href="#about" onClick={(e) => {e.preventDefault();go('about')}}>About us</a><a href="#programme" onClick={(e) => {e.preventDefault();go('programme')}}>Church programme</a><a href="#broadcast" onClick={(e) => {e.preventDefault();go('broadcast')}}>Messages</a></div>
        <div><small>Visit</small><a href={MAPS_URL} target="_blank" rel="noopener noreferrer">MFM Worship Centre<br />13 Bangor Road, Leith<br />Edinburgh EH6 5JY</a></div>
        <p>© {new Date().getFullYear()} MFM Edinburgh<br />Made for faith. Built for community.</p>
      </footer>

      {videoOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Latest message" onClick={() => setVideoOpen(false)}>
          <button onClick={() => setVideoOpen(false)} aria-label="Close video"><Icon name="x" /></button>
          <div className="modal-video" onClick={(event) => event.stopPropagation()}>
            <div className="video-frame">
              <iframe src={YOUTUBE_LATEST_EMBED} title="Latest message from MFM Edinburgh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <a className="button primary" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer"><YouTubeIcon /> More messages on YouTube</a>
          </div>
        </div>
      )}
    </main>
  )
}
