import { motion } from 'framer-motion'
import { SectionEyebrow, WordReveal } from './RevealText'
import GalleryPhoto from './GalleryPhoto'
import { bakeryPhotos } from '../data'

const values = [
  { title: 'Freshly Baked Daily', desc: 'Every item is made fresh each morning using quality ingredients. From pastries to cakes, we bake with care.', icon: '🥖' },
  { title: 'Affordable & Delicious', desc: 'Great taste does not have to break the bank. We believe everyone deserves a delicious treat at a fair price.', icon: '⭐' },
  { title: 'Quality at Heart', desc: 'We serve every customer like family. Love and quality in every bite.', icon: '🤝' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-36 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow>About Us</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mt-4 text-foreground">
              Baked fresh,<br />
              <span className="text-primary italic">every day</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                <WordReveal delay={0.2}>
                  Located in Laitumkhrah, Shillong, B.J Bakery brings you fresh, affordable baked goods made with quality ingredients and a whole lot of love.
                </WordReveal>
              </p>
              <p>
                <WordReveal delay={0.4}>
                  From our wide variety of pastries to freshly baked cakes, everything is made fresh daily. We take pride in serving the Shillong community with treats that brighten your day.
                </WordReveal>
              </p>
              <p>
                <WordReveal delay={0.6}>
                  Whether you are stopping by for a quick sweet treat, ordering a custom cake for a celebration, or just exploring — you will always find something delicious at B.J Bakery.
                </WordReveal>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <GalleryPhoto src={bakeryPhotos[8]} alt="Bakery display" width="w-full" rotate={-1} offsetX={0} offsetY={0} from="right" delay={0} aspect="aspect-[16/10]" />
            <div className="grid sm:grid-cols-3 gap-3">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-primary/10 bg-white p-4 text-center hover:border-primary/30 transition-all"
                >
                  <span className="text-xl">{v.icon}</span>
                  <h3 className="text-sm font-medium text-foreground mt-2">{v.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
