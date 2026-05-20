// Termologistika landing — sections built from real content of the original site,
// styled with Awesomic tokens (white canvas, monochrome ink, large radii).

function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <img src="mp5kn7wt-photo_2026-03-21_17-02-11-no-bg-preview-_carve.photos_.png" alt="Термологистика" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#services">Услуги</a>
          <a href="#airports">Аэропорт</a>
          <a href="#routes">Маршруты</a>
          <a href="#fleet">Автопарк</a>
          <a href="#process">Как мы работаем</a>
          <a href="#advantages">Преимущества</a>
        </div>
        <div className="nav-cta" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="tel:+79650490100" className="btn btn-ghost btn-sm nav-phone" style={{ display: 'inline-flex' }}>
            <IcoPhone size={14} /> <span className="nav-phone-text">+7 (965) 049-01-00</span>
          </a>
          <a href="#calc" className="btn btn-primary btn-sm nav-calc-btn">
            <span className="nav-calc-text">Рассчитать стоимость</span> <IcoArrow size={14} />
          </a>
          <button className="nav-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню">
            <IcoMenu size={20} />
          </button>
        </div>
      </div>
      {mobileOpen &&
      <div className="nav-mobile-menu">
          <a href="#services" onClick={() => setMobileOpen(false)}>Услуги</a>
          <a href="#airports" onClick={() => setMobileOpen(false)}>Аэропорт</a>
          <a href="#routes" onClick={() => setMobileOpen(false)}>Маршруты</a>
          <a href="#fleet" onClick={() => setMobileOpen(false)}>Автопарк</a>
          <a href="#process" onClick={() => setMobileOpen(false)}>Как мы работаем</a>
          <a href="#advantages" onClick={() => setMobileOpen(false)}>Преимущества</a>
          <a href="#calc" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ marginTop: 16 }}>
            Рассчитать стоимость
          </a>
        </div>
      }
    </nav>);

}

function Hero({ accent }) {
  return (
    <section id="top" style={{ paddingTop: 56 }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.15fr 0.95fr',
          gap: 56, alignItems: 'center'
        }} className="hero-grid">
          <div>
            <div className="eyebrow">Температурная логистика</div>
            <h1 className="display" style={{ margin: '20px 0 24px', textWrap: 'balance' }}>
              Перевозка <br />
              медикаментов <br />
              между столицами <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                за&nbsp;1&nbsp;день.
                <svg style={{ position: 'absolute', left: 0, right: 0, bottom: '-6px', width: '100%', height: 14 }}
                viewBox="0 0 400 14" preserveAspectRatio="none" fill="none">
                  <path d="M2 9 Q 100 0, 200 6 T 398 4" stroke={accent} strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="body-lg" style={{ maxWidth: 540, margin: '0 0 36px', textWrap: 'pretty' }}>
              Соблюдаем GMP-стандарт качества: точный температурный контроль и полное
              сопровождение груза — от погрузки до доставки на ваш склад.
            </p>
            <div className="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#calc" className="btn btn-primary">
                Рассчитать стоимость доставки <IcoArrow size={16} />
              </a>
              <a href="https://wa.me/79650490100" className="btn" style={{ background: 'var(--c-wa)', color: 'var(--c-white)' }}>
                <IcoMessage size={16} /> Написать в WhatsApp
              </a>
            </div>

            <div className="hero-stats" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0, marginTop: 40, paddingTop: 20,
              borderTop: '1px solid var(--c-faded)'
            }}>
              <HeroStat num="2 000+" label="успешных доставок" />
              <HeroStat num="GMP" label="стандарт качества" />
              <HeroStat num="24/7" label="мониторинг температуры" />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <LiveMonitor accent={accent} />
          </div>
        </div>

        <div className="pill-tags" style={{
          marginTop: 40,
          display: 'flex', flexWrap: 'wrap',
          gap: 12
        }}>
          <PillTag icon={<IcoShield size={14} />} label="GMP стандарт качества" />
          <PillTag icon={<IcoSignal size={14} />} label="Метрологическая точность" />
          <PillTag icon={<IcoClock size={14} />} label="Реальное время отслеживания" />
        </div>
      </div>
    </section>);

}

function PillTag({ icon, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '14px 20px', borderRadius: 16,
      background: 'var(--c-canvas)',
      fontSize: 14, fontWeight: 500, color: 'var(--c-ink)'
    }}>
      <span style={{ color: 'var(--c-ember)' }}>{icon}</span>
      {label}
    </div>);

}

function HeroStat({ num, label }) {
  return (
    <div>
      <div className="stat-num">{num}</div>
      <div className="caption" style={{ marginTop: 4 }}>{label}</div>
    </div>);

}

function TrustedBy() {
  const partners = [
  { name: 'Перекрёсток', desc: 'Сеть продуктовых магазинов', logo: 'mp5horem-20200305075647_Perekrestok_supermarket_logo_2020-no-bg-preview_carve.photos_l8ssyj.png' },
  { name: 'Вкусвилл', desc: 'Супермаркеты', logo: 'mp5horey-39565d3f-ab25-4f49-8502-14e8df1a8ddb-no-bg-preview_carve.photos_jzefsz.png' },
  { name: 'Ракурс-инжиниринг', desc: 'Ведущий производитель оборудования', logo: 'mp5horfy-photo_2026-05-14_19-52-30.jpg' },
  { name: 'iClinic', desc: 'Сеть медицинских клиник', logo: 'mp5horfr-photo_2026-05-14_19-52-41.jpg' },
  { name: 'Фармсинтез Норд', desc: 'Крупнейший производитель лекарств в России', logo: 'mp5horfs-photo_2026-05-14_19-52-35.jpg' },
  { name: 'Первомед им. Павлова', desc: 'Многопрофильная медклиника', logo: 'mp5horfl-photo_2026-05-14_19-52-47.jpg' }];

  // Три копии — хватает для широких экранов
  const allCards = [...partners, ...partners, ...partners];

  // Seamless JS-driven loop: двигаем trackRef через RAF
  // и возвращаем в 0 когда прошли 1/3 длины (ровно один набор).
  const trackRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let last = performance.now();
    let raf;

    // Скорость px/sec — разная для брейкпойнтов
    const getSpeed = () => {
      const w = window.innerWidth;
      if (w <= 480) return 90;
      if (w <= 600) return 80;
      if (w <= 1100) return 70;
      return 60;
    };

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        x += getSpeed() * dt;
        // Длина одного набора = scrollWidth / 3
        const oneSet = track.scrollWidth / 3;
        if (oneSet > 0 && x >= oneSet) x -= oneSet;
        track.style.transform = `translate3d(${-x}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section id="trusted" style={{ paddingTop: 96 }}>
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Нам доверяют</div>
            <h2 className="display-sm">Сотрудничаем<br />с крупными производителями<br />и сетями.</h2>
          </div>
          <p className="body-lg">
            С нами работают фармацевтические производители, торговые сети
            и медицинские центры по всей России.
          </p>
        </div>

        <div
          className="carousel-wrapper"
          ref={wrapRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          
          <div className="carousel-track" ref={trackRef}>
            {allCards.map((p, i) =>
            <div key={i} className="carousel-card">
                <div className="carousel-card-logo">
                  <img src={p.logo} alt={p.name} />
                </div>
                <div className="carousel-card-name">{p.name}</div>
                <div className="carousel-card-desc">{p.desc}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Services({ accent }) {
  return (
    <section id="services">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Услуги</div>
            <h2 className="display-sm">Какие грузы <br />мы перевозим.</h2>
          </div>
          <p className="body-lg">
            Специализируемся на надёжной термоперевозке чувствительных грузов
            с полным контролем температуры.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
          gap: 24
        }}>
          <ServiceCard
            tag="Цветы"
            title="Перевозка цветов"
            range="+2…+8 °C  ·  +15…+25 °C"
            description="Срезанные цветы перевозим при +2…+8 °C, горшечные растения — при +15…+25 °C (тёплый режим). Быстрая погрузка без простоев, стабильный температурный режим и подробный фотоотчёт."
            bullets={[
            'Срезанные цветы: +2…+8 °C',
            'Горшечные растения: +15…+25 °C',
            'Быстрая погрузка без простоев',
            'Фотоотчёт при погрузке и выгрузке',
            'Доставка до складов и магазинов']
            }
            tone="magenta"
            illo={<FlowersIllo />} />
          
          <ServiceCard
            tag="Фарма"
            title="Перевозка медикаментов"
            range="−25 °C … +8 °C"
            description="Междугородние перевозки лекарственных препаратов с термописцем и госповеркой. Контроль температуры каждые 10 минут и распечатка графика по окончании рейса."
            bullets={[
            'Диапазон от −25 °C до +8 °C',
            'Термописец с действующей госповеркой',
            'Контроль температуры каждые 10 минут',
            'Распечатка графика по окончании рейса',
            'Доверие крупных фармацевтических компаний']
            }
            tone="ember"
            illo={<PharmaIllo accent={accent} />} />
          
        </div>

        {/* Also carry */}
        <div style={{ marginTop: 24 }}>
          <div className="card card-canvas card-gradient-border" style={{ padding: 32 }}>
            <span className="badge badge-mono badge-outline" style={{ borderColor: 'var(--c-faded)' }}>
              Также перевозим
            </span>
            <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 16, marginBottom: 16 }}>
              Другие категории грузов
            </h3>
            <div className="also-carry-list" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 0', marginTop: 12 }}>
              {['Оборудование', 'Общие грузы', 'Мебель', 'Продукты питания', 'Офисные переезды', 'Домашние переезды'].map((x, i, arr) =>
              <span key={x} style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: 15,
                fontWeight: 500,
                color: 'var(--c-ink)'
              }}>
                  {x}
                  {i < arr.length - 1 && <span className="dot-separator" style={{ color: 'var(--c-wa)', margin: '0 12px' }}>•</span>}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function ServiceCard({ tag, title, range, description, bullets, tone, illo, photo }) {
  const badgeClass = tone === 'magenta' ? 'badge-magenta' : 'badge-ember';
  return (
    <div className="card card-canvas card-gradient-border" style={{ padding: 36, display: 'flex', flexDirection: 'column', minHeight: 520 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className={`badge ${badgeClass} badge-mono`}>{tag}</span>
        {!photo && <div style={{ height: 100, width: 100 }}>{illo}</div>}
      </div>

      {photo &&
      <div style={{
        marginTop: 16, marginBottom: 20,
        borderRadius: 20, overflow: 'hidden',
        aspectRatio: '16/9',
        border: '1px solid rgba(0,0,0,0.06)'
      }}>
          <img
          src={photo}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
        </div>
      }

      <h3 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '24px 0 8px' }}>
        {title}
      </h3>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--c-graphite)', marginBottom: 16 }}>
        {range}
      </div>
      <p className="body" style={{ margin: 0, marginBottom: 24 }}>{description}</p>

      <ul style={{
        margin: 0, padding: 0, listStyle: 'none',
        display: 'flex', flexDirection: 'column', gap: 10,
        marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.07)'
      }}>
        {bullets.map((b) =>
        <li key={b} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--c-graphite)' }}>
            <span style={{ flex: '0 0 auto', marginTop: 4, color: tone === 'ember' ? 'var(--c-ember)' : 'var(--c-magenta)' }}>
              <IcoCheck size={14} weight={2.5} />
            </span>
            <span>{b}</span>
          </li>
        )}
      </ul>
    </div>);

}

function FlowersIllo() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      {/* Стебель */}
      <path d="M50 50 L50 88" stroke="var(--c-ink)" strokeWidth="3" strokeLinecap="round" />
      {/* Листики */}
      <ellipse cx="42" cy="70" rx="8" ry="4" fill="var(--c-ink)" transform="rotate(-30 42 70)" />
      <ellipse cx="58" cy="75" rx="7" ry="3.5" fill="var(--c-ink)" transform="rotate(25 58 75)" />
      {/* Лепестки — 5 кругов вокруг центра */}
      <circle cx="50" cy="25" r="12" fill="var(--c-wa)" />
      <circle cx="36" cy="35" r="11" fill="#a1a1aa" />
      <circle cx="64" cy="35" r="11" fill="var(--c-ink)" />
      <circle cx="40" cy="50" r="10" fill="var(--c-wa)" opacity="0.7" />
      <circle cx="60" cy="50" r="10" fill="#a1a1aa" opacity="0.8" />
      {/* Сердцевина */}
      <circle cx="50" cy="40" r="8" fill="var(--c-ink)" />
      <circle cx="50" cy="40" r="4" fill="var(--c-wa)" />
    </svg>);

}
function PharmaIllo({ accent }) {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      {/* Большая капсула — повернутая */}
      <g transform="translate(50 50) rotate(-45) translate(-50 -50)">
        {/* Левая половина — тёмная */}
        <circle cx="35" cy="50" r="14" fill="var(--c-ink)" />
        <rect x="35" y="36" width="15" height="28" fill="var(--c-ink)" />

        {/* Правая половина — синяя */}
        <circle cx="65" cy="50" r="14" fill="var(--c-wa)" />
        <rect x="50" y="36" width="15" height="28" fill="var(--c-wa)" />
      </g>

      {/* Маленькая таблетка справа внизу */}
      <circle cx="72" cy="72" r="10" fill="#a1a1aa" />
      <circle cx="72" cy="72" r="5" fill="var(--c-ink)" />

      {/* Маленькая таблетка слева вверху */}
      <circle cx="28" cy="28" r="8" fill="#a1a1aa" opacity="0.6" />
      <circle cx="28" cy="28" r="4" fill="var(--c-white)" />
    </svg>);

}

function AirportsSection() {
  const aps = [
  { code: 'SVO', name: 'Шереметьево', sub: 'Терминалы карго · Москва' },
  { code: 'DME', name: 'Домодедово', sub: 'Терминал-Карго · DTS · Авиабэст' },
  { code: 'VKO', name: 'Внуково', sub: 'Внуково-Карго · ВКО-1' }];

  return (
    <section id="airports">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Аэропорт</div>
            <h2 className="display-sm">Доставка из <br />аэропортов Москвы.</h2>
          </div>
          <p className="body-lg">
            Встречаем рейсы в Шереметьево, Домодедово и Внуково. Работаем
            с грузом напрямую из карго, делаем брокерское оформление и доставляем
            на ваш склад.
          </p>
        </div>

        {/* Airport photo hero */}
        <div style={{
          marginBottom: 32, borderRadius: 24, overflow: 'hidden',
          aspectRatio: '21/9', position: 'relative'
        }}>
          <img
            src="mp5jrbkm-photo_2026-05-08_15-01-23.jpg"
            alt="Брендированный автотранспорт Термологистика в аэропорту"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="airports-grid">
          {/* Left: services included */}
          <div className="card card-whisper" style={{ padding: 36 }}>
            <span className="caption">Что входит в услугу</span>
            <ul style={{
              margin: '24px 0 0', padding: 0, listStyle: 'none',
              display: 'flex', flexDirection: 'column', gap: 14
            }}>
              {[
              'Встреча рейсов в Шереметьево, Домодедово и Внуково',
              'Получение груза напрямую из карго',
              'Брокерское оформление',
              'Оперативная встреча борта с фотофиксацией',
              'Подробный фотоотчёт на каждом этапе',
              'Доставка на ваш склад или магазин'].
              map((x) =>
              <li key={x} style={{ display: 'flex', gap: 12, fontSize: 16, color: 'var(--c-deep)' }}>
                  <span style={{ marginTop: 6, color: 'var(--c-ember)' }}>
                    <IcoCheck size={14} weight={2.5} />
                  </span>
                  <span>{x}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Right: airport cards stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {aps.map((a) =>
            <div key={a.code} className="card card-sm airport-card" style={{
              padding: 28, background: 'var(--c-canvas)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
            }}>
                <div className="airport-card-inner" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="airport-code" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600,
                  padding: '8px 14px', background: 'var(--c-ink)', color: 'var(--c-white)',
                  borderRadius: 12, flexShrink: 0
                }}>{a.code}</div>
                  <div>
                    <div className="airport-name" style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{a.name}</div>
                    <div className="body" style={{ fontSize: 13, marginTop: 2 }}>{a.sub}</div>
                  </div>
                </div>
                <IcoArrowUR size={20} className="airport-arrow" />
              </div>
            )}
            <div style={{
              padding: 20, background: 'var(--c-ink)', color: 'var(--c-white)',
              borderRadius: 24, display: 'flex', alignItems: 'center', gap: 14
            }}>
              <span style={{ color: 'var(--c-ember)' }}><IcoSignal size={20} /></span>
              <div style={{ fontSize: 14, lineHeight: 1.45 }}>
                Оперативная встреча борта, погрузка с фотофиксацией
                и сопровождение до пункта назначения.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Routes() {
  const main = [
  { title: 'Из аэропортов Москвы', sub: 'Шереметьево, Домодедово, Внуково — по Москве и МО' },
  { title: 'Москва ↔ Санкт-Петербург', sub: 'И Ленинградская область' },
  { title: 'Междугородние перевозки', sub: 'По центральной России' }];

  const special = [
  'Доставка цветов из Шереметьево, Домодедово и Внуково на склады и магазины Москвы и МО',
  'Перевозка медикаментов по маршруту Москва — Санкт-Петербург',
  'Термоперевозки из аэропортов в регионы'];

  return (
    <section id="routes" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Маршруты</div>
            <h2 className="display-sm">По каким маршрутам <br />мы работаем.</h2>
          </div>
          <p className="body-lg">
            Работаем из аэропортов Москвы, между столицами и по центральной России.
            Особо сильны на маршрутах Москва ↔ Санкт-Петербург.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="routes-main-grid">
          {main.map((r, i) =>
          <div key={r.title} className="card card-sm" style={{
            padding: 28, background: 'var(--c-canvas)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 220
          }}>
              <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.08,
              textTransform: 'uppercase', color: 'var(--c-steel)'
            }}>0{i + 1} / 03</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{r.title}</div>
                <div className="body" style={{ marginTop: 8 }}>{r.sub}</div>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: 24 }} className="routes-special-grid">
          <div className="card" style={{ padding: 32, background: 'var(--c-ink)', color: 'var(--c-white)', overflow: 'hidden', boxSizing: 'border-box' }}>
            <span className="badge badge-mono" style={{
              background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)'
            }}>Особо сильные направления</span>
            <ul style={{ margin: '24px 0 0', padding: 0, listStyle: 'none',
              display: 'flex', flexDirection: 'column', gap: 14 }}>
              {special.map((x) =>
              <li key={x} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ marginTop: 5, color: 'var(--c-ember)', flexShrink: 0 }}>
                    <IcoCheck size={14} weight={2.5} />
                  </span>
                  <span style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{x}</span>
                </li>
              )}
            </ul>
          </div>
          <div className="card card-canvas" style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', boxSizing: 'border-box' }}>
            <div>
              <div className="caption">Работаем с аэропортами</div>
              <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 16, lineHeight: 1.15, wordBreak: 'break-word' }}>
                Хотите узнать точное время и&nbsp;стоимость по&nbsp;вашему маршруту?
              </h3>
              <p className="body" style={{ marginTop: 12 }}>
                Напишите нам — рассчитаем за 15 минут.
              </p>
            </div>
            <a href="#calc" className="btn btn-primary routes-cta-btn" style={{ alignSelf: 'flex-start', marginTop: 24, maxWidth: '100%', boxSizing: 'border-box', whiteSpace: 'normal', textAlign: 'left' }}>
              Рассчитать стоимость по вашему маршруту <IcoArrow size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function Fleet() {
  const trucks = [
  { name: 'Ford Transit', tag: 'Рефрижератор', desc: 'Компактный и манёвренный фургон для оперативной доставки по Москве и области. Идеален для перевозки цветов из аэропортов.',
    specs: [['Объём', '12 м³'], ['Грузоподъёмность', 'до 1 200 кг'], ['Температура', '−25 °C … +12 °C']] },
  { name: 'ГАЗ (ГАЗель)', tag: 'Рефрижератор', desc: 'Надёжный отечественный фургон для междугородних перевозок. Отличное соотношение цены и вместимости.',
    specs: [['Объём', '9 м³'], ['Грузоподъёмность', 'до 1 500 кг'], ['Температура', '−20 °C … +12 °C']] },
  { name: 'Peugeot', tag: 'Рефрижератор', desc: 'Европейский Quality — тихий, экономичный и надёжный. Подходит для деликатных фармацевтических грузов.',
    specs: [['Объём', '11 м³'], ['Грузоподъёмность', 'до 1 300 кг'], ['Температура', '−25 °C … +12 °C']] }];

  return (
    <section id="fleet">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Автопарк</div>
            <h2 className="display-sm">Современный <br />рефрижераторный <br />автопарк.</h2>
          </div>
          <p className="body-lg">
            Надёжные фургоны Ford Transit, ГАЗ и Peugeot, оснащённые
            профессиональными холодильными установками. Регулярное ТО и
            госповеренные термописцы.
          </p>
        </div>

        {/* Feature dark card with photo */}
        <div className="card" style={{
          background: 'var(--c-ink)', color: 'var(--c-white)',
          padding: 48, marginBottom: 24, position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }} className="fleet-feature-grid">
            <div>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)' }}>
                <IcoTruck size={12} /> Каждая машина оборудована
              </span>
              <h3 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 20, marginBottom: 0 }}>
                Никогда не выключаем холодильник <br />
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>— даже на стоянках.</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 24, fontSize: 16, maxWidth: 480 }}>
                Строго соблюдаем температурный режим на всём пути. Ваш груз приезжает
                в точно оговорённых условиях.
              </p>
              <ul style={{ margin: '28px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                ['Термописцем с действующей госповеркой', <IcoShield key="s" size={18} />],
                ['GPS-мониторингом в реальном времени', <IcoSignal key="g" size={18} />],
                ['Постоянно работающим холодильником', <IcoThermo key="t" size={18} />]].
                map(([txt, ico]) =>
                <li key={txt} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: 18, borderRadius: 20,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                    <span style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(37,99,235,0.18)', color: 'var(--c-ember)',
                    display: 'grid', placeItems: 'center'
                  }}>{ico}</span>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{txt}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Evening loading photo */}
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              minHeight: 400,
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img
                src="mp5jrbke-photo_2026-05-08_14-31-54.jpg"
                alt="Вечерняя погрузка в рефрижератор — работаем круглосуточно"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
            </div>
          </div>
        </div>

        {/* Truck cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="trucks-grid">
          {trucks.map((t) =>
          <div key={t.name} className="card card-sm" style={{ padding: 28, background: 'var(--c-canvas)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="caption">{t.tag}</span>
                <IcoTruck size={20} weight={1.5} />
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 16 }}>{t.name}</div>
              <p className="body" style={{ marginTop: 8, fontSize: 13 }}>{t.desc}</p>
              <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6,
              paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                {t.specs.map(([k, v]) =>
              <li key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13,
                fontFamily: 'var(--font-mono)', color: 'var(--c-graphite)' }}>
                    <span style={{ color: 'var(--c-steel)' }}>{k}</span>
                    <span style={{ color: 'var(--c-ink)' }}>{v}</span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Advantages() {
  const items = [
  { t: 'Термописец с госповеркой', d: 'Официальное подтверждение температурного режима.', i: <IcoShield size={20} /> },
  { t: 'Подробная фотофиксация', d: 'Фотоотчёт груза на всех этапах перевозки.', i: <IcoCamera size={20} /> },
  { t: 'GPS-трекинг', d: 'Местоположение груза в реальном времени.', i: <IcoSignal size={20} /> },
  { t: 'Постоянно работающий холодильник', d: 'Даже во время стоянок — температура не прерывается.', i: <IcoThermo size={20} /> },
  { t: 'Электронный документооборот', d: 'Минимум бумажной волокиты.', i: <IcoDoc size={20} /> },
  { t: 'Строгие внутренние стандарты', d: 'Не экономим на топливе и контроле.', i: <IcoCheck size={20} weight={2} /> }];

  return (
    <section id="advantages">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Преимущества</div>
            <h2 className="display-sm">Почему выбирают <br />Термологистику.</h2>
          </div>
          <p className="body-lg">
            Полный контроль груза на всех этапах — от встречи рейса до выгрузки
            на складе. Гарантируем нулевой риск порчи груза.
          </p>
        </div>

        <div className="advantages-grid">
          {items.map((it, i) =>
          <div key={it.t} className="advantage-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.08,
                textTransform: 'uppercase', opacity: 0.4
              }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ opacity: 0.3 }}>{it.i}</span>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{it.t}</div>
                <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.5, color: 'var(--c-graphite)' }}>{it.d}</p>
              </div>
            </div>
          )}
        </div>

        <div className="guarantee" style={{
          marginTop: 24,
          padding: 48, background: 'var(--c-canvas)',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
          borderRadius: 24
        }}>
          <div>
            <div className="caption">Наша гарантия</div>
            <p style={{
              margin: '12px 0 0', fontSize: 28, fontWeight: 500, lineHeight: 1.25,
              letterSpacing: '-0.02em', textWrap: 'pretty'
            }}>
              Мы гарантируем <span style={{
                background: 'var(--c-ember)', color: 'var(--c-white)',
                padding: '2px 10px', borderRadius: 8,
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
                lineHeight: 1.7
              }}>нулевой риск порчи&nbsp;груза</span> благодаря метрологической
              точности и полному сопровождению.
            </p>
          </div>
        </div>
      </div>
    </section>);

}

function Process() {
  const steps = [
  { t: 'Заявка', d: 'Вы оставляете заявку с параметрами груза.' },
  { t: 'Расчёт стоимости', d: 'Быстро рассчитываем стоимость и присылаем коммерческое предложение.' },
  { t: 'Согласование', d: 'Согласовываем время и подаём рефрижератор.' },
  { t: 'Погрузка', d: 'Погрузка с фотофиксацией и проверкой температуры.' },
  { t: 'Перевозка', d: 'С постоянно работающим холодильником и термописцем.' },
  { t: 'Доставка', d: 'На ваш склад + полный фотоотчёт и распечатка температуры.' }];

  return (
    <section id="process">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Как мы работаем</div>
            <h2 className="display-sm">Прозрачная схема — <br />от заявки до документов.</h2>
          </div>
          <p className="body-lg">
            Семь шагов. Один водитель. Один реф-фургон без передачи груза
            на промежуточные склады.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) =>
          <div key={s.t} className="card card-sm process-step" style={{
            padding: 28,
            background: i === 0 ? 'var(--c-canvas)' : 'var(--c-white)',
            color: 'var(--c-ink)',
            border: i === 0 ? 'none' : '1px solid var(--c-faded)',
            minHeight: 200,
            display: 'flex', flexDirection: 'column', gap: 14
          }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.08,
                textTransform: 'uppercase', opacity: 0.4
              }}>Шаг {String(i + 1).padStart(2, '0')}</span>
                <span style={{ opacity: 0.3 }}>
                  <IcoArrow size={16} />
                </span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{s.t}</div>
              <p style={{
              margin: 0, fontSize: 14, lineHeight: 1.55,
              color: 'var(--c-graphite)'
            }}>{s.d}</p>
            </div>
          )}
        </div>

        {/* Step 07: Documents — final step with visual emphasis */}
        <div className="card step7-card" style={{
          background: 'var(--c-ink)', color: 'var(--c-white)',
          padding: '32px 48px 24px', marginTop: 24
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }} className="step7-grid">
            {/* Left: Content */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.08,
                textTransform: 'uppercase', opacity: 0.5
              }}>Шаг 07</span>

              <h3 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 14, marginBottom: 0 }}>
                Полный пакет документов <br />
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>— и температурный график.</span>
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 16, fontSize: 16, maxWidth: 480 }}>
                После доставки вы получаете полный пакет документов: фотоотчёт с каждого этапа и распечатку температурного графика с термописца.
              </p>

              {/* Equipment list — same style as Fleet */}
              <ul style={{ margin: '18px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                ['Фотоотчёт на всех этапах', <IcoCamera key="c" size={16} />],
                ['Температурный график с термописца', <IcoThermo key="t" size={16} />],
                ['Все документы в электронном виде', <IcoDoc key="d" size={16} />]].
                map(([txt, ico]) =>
                <li key={txt} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px', borderRadius: 14,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                    <span style={{
                    width: 32, height: 32, borderRadius: 10,
                    background: 'rgba(37,99,235,0.18)', color: 'var(--c-ember)',
                    display: 'grid', placeItems: 'center', flexShrink: 0
                  }}>{ico}</span>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{txt}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Right: Photo — same style as Fleet */}
            <div className="photo-frame" style={{
              borderRadius: 24, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              minHeight: 240, minWidth: 0
            }}>
              <img
                src="mp5jrbjy-photo_2026-04-08_13-15-27.jpg"
                alt="Курьер и клиент"
                style={{ width: '100%', height: "549px", objectFit: "cover" }} />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}


function CostForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '', phone: '', cargo: 'Цветы', weight: '', route: '', regime: '', comment: ''
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="calc">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="eyebrow-num">08</span> Стоимость</div>
            <h2 className="display-sm" style={{ marginTop: 16 }}>Индивидуальный расчёт стоимости.</h2>
          </div>
        </div>

        <div className="card calc-card cost-form-grid" style={{
          background: 'var(--c-ink)', color: 'var(--c-white)',
          padding: 56, borderRadius: 56,
          display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56,
          position: 'relative', overflow: 'hidden'
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', right: -120, top: -120,
            width: 380, height: 380, borderRadius: 999,
            background: 'radial-gradient(circle, rgba(37,99,235,0.32) 0%, rgba(37,99,235,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative' }}>
            <span className="badge badge-mono" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)' }}>
              Быстрый расчёт
            </span>
            <h3 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 20 }}>
              Коммерческое <br />предложение <br />
              <span style={{ color: 'var(--c-ember)' }}>за 15 минут.</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 16, fontSize: 16, maxWidth: 380 }}>
              Просто заполните форму — мы свяжемся с вами.
              Честная цена за действительно надёжную термоперевозку.
            </p>

            <div style={{ marginTop: 40 }}>
              <div className="caption" style={{ color: 'rgba(255,255,255,0.5)' }}>От чего зависит стоимость</div>
              <ul style={{ margin: '16px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                'Расстояние и маршрут перевозки',
                'Вес и объём груза',
                'Требуемый температурный режим'].
                map((x) =>
                <li key={x} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ color: 'var(--c-wa)', marginTop: 4 }}>
                      <IcoCheck size={12} weight={2.5} />
                    </span>
                    {x}
                  </li>
                )}
              </ul>
            </div>

            <div style={{ marginTop: 32, padding: '20px 24px', background: 'rgba(255,255,255,0.06)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 600, fontSize: 16 }}>Без скрытых доплат</div>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8, fontSize: 14, lineHeight: 1.5 }}>
                Честная цена за действительно надёжную термоперевозку. Полная прозрачность расчёта.
              </p>
            </div>
          </div>

          {submitted ?
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24, padding: 48,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', minHeight: 400
          }}>
              <div style={{
              width: 64, height: 64, borderRadius: 999,
              background: 'var(--c-ember)', display: 'grid', placeItems: 'center',
              color: 'var(--c-white)'
            }}>
                <IcoCheck size={28} weight={3} />
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 24 }}>
                Заявка отправлена!
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, maxWidth: 340 }}>
                Наш менеджер свяжется с вами в течение 15 минут.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-on-dark-ghost" style={{ marginTop: 24 }}>
                Отправить ещё одну заявку
              </button>
            </div> :

          <form onSubmit={(e) => {e.preventDefault();setSubmitted(true);}}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24, padding: 32,
            display: 'flex', flexDirection: 'column', gap: 12
          }}>
              <FormField label="Имя" required>
                <DarkInput value={form.name} onChange={set('name')} placeholder="Ваше имя" required />
              </FormField>
              <FormField label="Телефон / WhatsApp *" required>
                <DarkInput value={form.phone} onChange={set('phone')} type="tel" placeholder="+7 (___) ___-__-__" required />
              </FormField>
              <FormField label="Тип груза">
                <div style={{ display: 'flex', gap: 6 }}>
                  {['Цветы', 'Медикаменты', 'Другое'].map((v) =>
                <button type="button" key={v} onClick={() => setForm({ ...form, cargo: v })}
                style={{
                  flex: 1, padding: '12px 8px',
                  borderRadius: 12,
                  background: form.cargo === v ? 'var(--c-ember)' : 'rgba(255,255,255,0.06)',
                  color: form.cargo === v ? 'var(--c-white)' : 'rgba(255,255,255,0.7)',
                  border: '1px solid ' + (form.cargo === v ? 'var(--c-ember)' : 'rgba(255,255,255,0.08)'),
                  fontSize: 13, fontWeight: 500,
                  transition: 'all .15s'
                }}>{v}</button>
                )}
                </div>
              </FormField>
              <FormField label="Вес и объём">
                <DarkInput value={form.weight} onChange={set('weight')} placeholder="Например: 200 кг, 3 м³" />
              </FormField>
              <FormField label="Маршрут (откуда → куда)">
                <DarkInput value={form.route} onChange={set('route')} placeholder="Шереметьево → Склад" />
              </FormField>
              <FormField label="Температурный режим">
                <DarkInput value={form.regime} onChange={set('regime')} placeholder="Например: +2…+8°C" />
              </FormField>
              <FormField label="Комментарий">
                <DarkInput as="textarea" value={form.comment} onChange={set('comment')} placeholder="Дополнительная информация о грузе" />
              </FormField>
              <button type="submit" className="btn btn-accent" style={{ marginTop: 8, justifyContent: 'center' }}>
                Получить расчёт стоимости <IcoArrow size={16} />
              </button>
              <div className="caption" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 4, textAlign: 'center', lineHeight: 1.5 }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </div>
            </form>
          }
        </div>
      </div>
    </section>);

}

function FormField({ label, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.06,
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)'
      }}>{label}{required && <span style={{ color: 'var(--c-ember)' }}> *</span>}</label>
      {children}
    </div>);

}

function DarkInput({ as = 'input', ...props }) {
  const Cmp = as;
  const style = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--c-white)',
    borderRadius: 12,
    padding: '12px 14px',
    fontSize: 14,
    outline: 'none',
    fontFamily: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
    resize: as === 'textarea' ? 'vertical' : 'none',
    minHeight: as === 'textarea' ? 80 : undefined
  };
  return (
    <Cmp {...props}
    style={style}
    onFocus={(e) => e.target.style.borderColor = 'var(--c-ember)'}
    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />);


}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="eyebrow-num">09</span> Контакты</div>
            <h2 className="display-sm" style={{ marginTop: 16 }}>Свяжитесь с Термологистикой.</h2>
          </div>
          <p className="body-lg">
            Готовы ответить на любые вопросы и рассчитать стоимость вашей доставки.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="contact-grid">
          <div className="card card-canvas" style={{ padding: 40 }}>
            <span className="caption">Связаться напрямую</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 24 }}>
              <ContactLine label="+7 (965) 049-01-00" sub="Телефон" href="tel:+79650490100" icon={<IcoPhone size={16} />} />
              <ContactLine label="+7 (965) 049-01-00" sub="WhatsApp" href="https://wa.me/79650490100" icon={<IcoMessage size={16} />} />
              <ContactLine label="г. Санкт-Петербург, ул. Народная, 59" sub="Адрес" icon={<IcoMail size={16} />} />
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a href="https://wa.me/79650490100" className="btn btn-sm" style={{ background: 'var(--c-wa)', color: 'var(--c-white)' }}>
                <IcoMessage size={14} /> WhatsApp
              </a>
              <a href="tel:+79650490100" className="btn btn-ghost btn-sm">
                <IcoPhone size={14} /> Позвонить
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: 40, background: 'var(--c-ink)', color: 'var(--c-white)' }}>
            <span className="badge badge-mono" style={{
              background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)'
            }}>Реквизиты</span>
            <ul style={{ margin: '24px 0 0', padding: 0, listStyle: 'none',
              display: 'flex', flexDirection: 'column', gap: 10 }}>
              <ReqRow k="Организация" v="ИП Дербенева Марианна Владимировна" />
              <ReqRow k="ИНН" v="781428911507" />
              <ReqRow k="ОГРНИП" v="324784700067230" />
              <ReqRow k="Расчётный счёт" v="40802810500006014823" />
              <ReqRow k="Банк" v="АО «ТИНЬКОФФ БАНК»" />
              <ReqRow k="БИК" v="044525974" />
              <ReqRow k="Корр. счёт" v="30101810145250000974" />
              <ReqRow k="Адрес" v="г. Санкт-Петербург, ул. Народная, 59" />
            </ul>
          </div>
        </div>
      </div>
    </section>);

}

function ReqRow({ k, v }) {
  return (
    <li className="req-row" style={{
      display: 'flex', justifyContent: 'space-between', gap: 16,
      padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
      fontSize: 14
    }}>
      <span className="req-label" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.04, flexShrink: 0 }}>{k}</span>
      <span className="req-value" style={{ color: 'var(--c-white)', textAlign: 'right', wordBreak: 'break-word' }}>{v}</span>
    </li>);

}

function ContactLine({ label, sub, icon, href }) {
  const Wrap = href ? 'a' : 'div';
  return (
    <Wrap href={href} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '12px 0' }}>
      <span style={{
        width: 40, height: 40, borderRadius: 12,
        background: 'var(--c-white)', color: 'var(--c-ink)',
        display: 'grid', placeItems: 'center', flex: '0 0 auto'
      }}>{icon}</span>
      <div>
        <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--c-steel)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 0.06, marginTop: 2 }}>{sub}</div>
      </div>
    </Wrap>);

}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 48 }} className="footer-grid">
          <div>
            <div className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--c-white)' }}>
              <img src="mp5kn7wt-photo_2026-03-21_17-02-11-no-bg-preview-_carve.photos_.png" alt="Термологистика" style={{ height: 44, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>Термологистика</span>
            </div>
            <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.5)', fontSize: 14, maxWidth: 380, lineHeight: 1.55 }}>
              Профессиональная термологистика для цветов и медикаментов.
              Полный контроль температуры, GPS-отслеживание и фотоотчёт
              на каждом этапе доставки.
            </p>
          </div>
          <FooterCol title="Навигация" items={['Услуги', 'Аэропорт', 'Маршруты', 'Автопарк', 'Как мы работаем', 'Преимущества']} />
          <FooterCol title="Контакты" items={['+7 (965) 049-01-00', 'WhatsApp', 'Санкт-Петербург, ул. Народная, 59']} />
        </div>
        <div className="footer-bottom" style={{
          marginTop: 56, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between',
          color: 'rgba(255,255,255,0.45)', fontSize: 13, fontFamily: 'var(--font-mono)',
          gap: 16, flexWrap: 'wrap'
        }}>
          <span>© ИП Дербенева М.В. Все права защищены.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>);

}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="caption" style={{ marginBottom: 16, color: 'rgba(255,255,255,0.6)' }}>{title}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((x) =>
        <li key={x}><a href="#" style={{ fontSize: 15 }}>{x}</a></li>
        )}
      </ul>
    </div>);

}

Object.assign(window, {
  Nav, Hero, TrustedBy, Services, AirportsSection, Routes, Fleet, Advantages,
  Process, CostForm, Contact, Footer
});