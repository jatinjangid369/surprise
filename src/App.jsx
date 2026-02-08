import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import ScrollHint from './components/ScrollHint';
import Landing from './sections/Landing';
import Special from './sections/Special';
import Moments from './sections/Moments';
import Meaning from './sections/Meaning';
import Secret from './sections/Secret';
import Proposal from './sections/Proposal';

function App() {
  const [stage, setStage] = useState('main'); // 'main' or 'secret' or 'proposal'
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const startJourney = () => {
    setJourneyStarted(true);
    setShowScrollHint(true);
  };

  // Sync scroll to top on stage change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  if (stage === 'proposal') {
    return (
      <main className="bg-romantic-black min-h-screen">
        <Background />
        <Proposal />
      </main>
    );
  }

  if (stage === 'secret') {
    return (
      <main className="bg-romantic-black min-h-screen">
        <Secret onReveal={() => setStage('proposal')} />
      </main>
    );
  }

  return (
    <main className="bg-romantic-black relative">
      <Background />
      <ScrollHint isVisible={showScrollHint} onDismiss={() => setShowScrollHint(false)} />

      {!journeyStarted ? (
        <div className="h-screen flex items-center justify-center">
          <Landing onStart={startJourney} />
        </div>
      ) : (

        <div className="relative">
          <Landing onStart={() => { }} />
          <Special />
          <Moments />
          <Meaning />

          <div className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-romantic-black">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onClick={() => setStage('secret')}
              className="text-valentine-pink border-b border-valentine-pink/30 pb-2 hover:border-valentine-pink transition-colors tracking-widest uppercase text-sm glow-text"
            >
              One last thing... ❤️
            </motion.button>
          </div>
        </div>
      )}

      {/* Audio Toggle Placeholder */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-10 h-10 rounded-full border border-valentine-pink/20 flex items-center justify-center text-valentine-pink/50 hover:text-valentine-pink transition-colors bg-black/40 backdrop-blur-md">
          ❤️
        </button>
      </div>
    </main>
  );
}

export default App;
