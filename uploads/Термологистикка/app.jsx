// Termologistika landing — root app + Tweaks integration

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2563eb",
  "density": "default",
  "showMonitor": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ['#2563eb', '#0f172a', '#1d4ed8', '#0ea5e9'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.setAttribute('data-density', t.density);
  }, [t.accent, t.density]);

  return (
    <>
      <Nav />
      <main>
        <Hero accent={t.accent} />
        <TrustedBy />
        <Services accent={t.accent} />
        <AirportsSection />
        <Routes />
        <Fleet />
        <Advantages />
        <Process />
        <CostForm />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor
            label="Цвет акцента"
            value={t.accent}
            options={ACCENT_OPTIONS}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio
            label="Плотность"
            value={t.density}
            options={[
              { value: 'compact', label: 'Compact' },
              { value: 'default', label: 'Default' },
              { value: 'cozy', label: 'Cozy' },
            ]}
            onChange={(v) => setTweak('density', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
