import Image from 'next/image'
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  Music,
} from 'lucide-react'

const socialLinks = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/grupotradecorpsv',
    color: '#1877F2',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/grupotradecorpsv',
    color: '#E1306C',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: Music,
    url: 'https://www.tiktok.com/@grupotradecorpsv',
    color: '#25F4EE',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/grupo-trade-corp/',
    color: '#0A66C2',
  },
  {
    id: 'grupo-trade-corp',
    name: 'Grupo Trade Corp',
    icon: Globe,
    url: 'https://grupotcorp.com/',
    color: '#D6A556',
  },
  {
    id: 'web-2',
    name: 'Web 2',
    icon: Globe,
    url: 'https://grupotcorp.com/',
    color: '#D6A556',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/50369842090',
    color: '#25D366',
  },
]

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-2xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">Síguenos</h1>

        <div className="mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-primary/70 bg-card shadow-[0_0_35px_rgba(214,165,86,0.35)] md:h-40 md:w-40">
          <Image
            src="/logo.jpg"
            alt="Logo Grupo Trade Corp"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          {socialLinks.map((social) => {
            const Icon = social.icon

            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-24 rounded-xl border border-border/70 bg-card/70 py-3 flex flex-col items-center justify-center gap-2 transition duration-300 hover:scale-105 hover:border-primary"
              >
                <Icon size={26} style={{ color: social.color }} strokeWidth={1.8} />
                <span className="text-xs font-medium text-foreground">{social.name}</span>
              </a>
            )
          })}
        </div>

        <footer className="pt-2 text-sm text-secondary">Grupo Trade Corp</footer>
      </section>
    </main>
  )
}
