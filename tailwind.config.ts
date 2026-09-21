import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Cinzel', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				parchment: 'hsl(var(--parchment) / <alpha-value>)',
				leather: 'hsl(var(--leather) / <alpha-value>)',
				faction: {
					alliance: 'hsl(var(--faction-alliance) / <alpha-value>)',
					horde: 'hsl(var(--faction-horde) / <alpha-value>)'
				},
				rarity: {
					poor: 'hsl(var(--rarity-poor) / <alpha-value>)',
					common: 'hsl(var(--rarity-common) / <alpha-value>)',
					uncommon: 'hsl(var(--rarity-uncommon) / <alpha-value>)',
					rare: 'hsl(var(--rarity-rare) / <alpha-value>)',
					epic: 'hsl(var(--rarity-epic) / <alpha-value>)',
					legendary: 'hsl(var(--rarity-legendary) / <alpha-value>)'
				},
				class: {
					warrior: 'hsl(var(--class-warrior) / <alpha-value>)',
					paladin: 'hsl(var(--class-paladin) / <alpha-value>)',
					hunter: 'hsl(var(--class-hunter) / <alpha-value>)',
					rogue: 'hsl(var(--class-rogue) / <alpha-value>)',
					priest: 'hsl(var(--class-priest) / <alpha-value>)',
					shaman: 'hsl(var(--class-shaman) / <alpha-value>)',
					mage: 'hsl(var(--class-mage) / <alpha-value>)',
					warlock: 'hsl(var(--class-warlock) / <alpha-value>)',
					druid: 'hsl(var(--class-druid) / <alpha-value>)'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-parchment': 'var(--gradient-parchment)',
				'gradient-leather': 'var(--gradient-leather)',
				'gradient-alliance': 'var(--gradient-alliance)',
				'gradient-horde': 'var(--gradient-horde)',
				'gradient-ornate': 'linear-gradient(180deg, hsl(var(--primary) / 0.14), transparent 60%)'
			},
			boxShadow: {
				elegant: 'var(--shadow-elegant)',
				glow: 'var(--shadow-gold-glow)',
				ornate: 'var(--shadow-ornate)'
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.55' },
					'50%': { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				shimmer: {
					from: { backgroundPosition: '-200% 0' },
					to: { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'fade-up': 'fade-up 0.45s cubic-bezier(0.4, 0, 0.2, 1) both',
				shimmer: 'shimmer 3s linear infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;