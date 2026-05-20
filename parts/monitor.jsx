// Live temperature monitor centerpiece
// Renders a rolling sparkline + readouts that update every second.

function useTempSeries(length = 60, base = 5.2, jitter = 0.35) {
  const [series, setSeries] = React.useState(() => {
    const a = [];
    for (let i = 0; i < length; i++) {
      a.push(base + Math.sin(i * 0.4) * 0.4 + (Math.random() - 0.5) * jitter);
    }
    return a;
  });
  React.useEffect(() => {
    const id = setInterval(() => {
      setSeries((s) => {
        const next = s.slice(1);
        const last = s[s.length - 1];
        const drift = (base - last) * 0.18;
        next.push(last + drift + (Math.random() - 0.5) * jitter);
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, [base, jitter]);
  return series;
}

function Sparkline({ data, min = 2, max = 8, accent = "#ff5a00" }) {
  const w = 100, h = 40;
  const n = data.length;
  const points = data.map((v, i) => {
    const x = (i / (n - 1)) * w;
    const t = (v - min) / (max - min);
    const y = h - Math.max(0, Math.min(1, t)) * h;
    return [x, y];
  });
  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  const last = points[points.length - 1];

  // Safe zone band 2-8°C
  const safeTop = h - ((8 - min) / (max - min)) * h;
  const safeBot = h - ((2 - min) / (max - min)) * h;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* safe zone */}
      <rect x="0" y={safeTop} width={w} height={Math.max(0, safeBot - safeTop)}
            fill="rgba(52,211,153,0.08)" />
      <line x1="0" y1={safeTop} x2={w} y2={safeTop}
            stroke="rgba(52,211,153,0.25)" strokeWidth="0.3" strokeDasharray="0.6 0.6" />
      <line x1="0" y1={safeBot} x2={w} y2={safeBot}
            stroke="rgba(52,211,153,0.25)" strokeWidth="0.3" strokeDasharray="0.6 0.6" />
      <path d={area} fill="url(#spark-fade)" />
      <path d={path} fill="none" stroke={accent} strokeWidth="0.9"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r="1.4" fill={accent} />
      <circle cx={last[0]} cy={last[1]} r="3" fill={accent} opacity="0.2">
        <animate attributeName="r" values="1.4;4;1.4" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function LiveMonitor({ accent = "#ff5a00" }) {
  const data = useTempSeries(72, 5.2, 0.45);
  const current = data[data.length - 1];
  const prev = data[data.length - 5];
  const delta = current - prev;

  const fmt = (v, d = 1) => (v >= 0 ? "+" : "") + v.toFixed(d);
  const fmtAbs = (v, d = 1) => v.toFixed(d);

  return (
    <div className="monitor">
      <div className="monitor-grid-bg" />

      <div className="mon-head">
        <div>
          <div className="mon-status">
            <span className="pulse-dot" />
            <span>В пути · Норма</span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>
            LIVE · Обновлено секунду назад
          </div>
        </div>
        <div className="mon-title">
          <div className="mon-title-id">№ ТЛ-2841 · РЕФ-12</div>
          <div className="mon-title-route">SVO → Склад «Фармсинтез», Москва</div>
        </div>
      </div>

      <div className="mon-reading">
        <span className="val">{fmtAbs(current)}</span>
        <span className="unit">°C</span>
        <span className="delta" style={{ color: Math.abs(delta) < 0.4 ? '#34d399' : '#fcd34d' }}>
          {fmt(delta)} за 5 мин
        </span>
      </div>

      <div className="mon-chart">
        <Sparkline data={data} min={2} max={8} accent={accent} />
      </div>

      <div className="mon-row">
        <div className="mon-cell">
          <span className="label">Назначено</span>
          <span className="val">+2…+8 °C</span>
          <span className="sub">Медикаменты</span>
        </div>
        <div className="mon-cell">
          <span className="label">Период</span>
          <span className="val">10<span style={{opacity:.5, fontSize:13}}> мин</span></span>
          <span className="sub">Госповерка</span>
        </div>
        <div className="mon-cell">
          <span className="label">Двери</span>
          <span className="val">Закрыты</span>
          <span className="sub">Опломб. 14:02</span>
        </div>
      </div>

      <div className="mon-foot">
        <span>МКАД, 47 км · 18 мин до точки</span>
        <span className="tip">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          GMP качество
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { LiveMonitor, Sparkline, useTempSeries });
