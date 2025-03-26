import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/novix-logo.png" alt="Novix VPN Logo" width={24} height={24} className="rounded-md" />
              <span className="text-lg font-bold">Novix VPN</span>
            </div>
            <p className="text-sm text-muted-foreground">Protecting your online privacy and security since 2015.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/NovixVPN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/NovixVpn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="https://www.instagram.com/novixvpn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@NOVIXVPN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/novix-vpn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.threads.net/@novixvpn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.186c0-3.389.849-6.233 2.495-8.446C5.845 1.205 8.598.024 12.18 0h.014c2.071 0 3.935.364 5.539 1.084a10.318 10.318 0 0 1 4.641 4.039c1.137 1.868 1.714 4.117 1.714 6.682 0 2.568-.577 4.83-1.714 6.707a10.236 10.236 0 0 1-4.641 4.045c-1.604.723-3.468 1.088-5.539 1.088l.006-.645Zm-.7-19.514c-2.296 0-4.253.587-5.815 1.748-1.58 1.173-2.384 2.867-2.384 5.035 0 2.186.805 3.886 2.384 5.059 1.562 1.161 3.519 1.748 5.815 1.748 1.093 0 2.095-.175 2.984-.524.887-.349 1.72-.925 2.486-1.713.766-.789 1.241-1.649 1.571-2.73.33-1.087.497-2.347.497-3.84 0-1.475-.167-2.727-.497-3.808-.33-1.081-.805-1.941-1.571-2.73-.766-.788-1.599-1.364-2.486-1.713-.889-.349-1.891-.524-2.984-.524v-.008Z" />
                  <path d="M19.207 7.755c-.515-.511-1.135-.899-1.859-1.168-.724-.269-1.496-.404-2.316-.404-1.32 0-2.442.329-3.367.987-.925.658-1.387 1.575-1.387 2.752 0 1.177.462 2.094 1.387 2.752.925.658 2.047.987 3.367.987.82 0 1.592-.135 2.316-.404.724-.269 1.344-.657 1.859-1.168.515-.511.906-1.122 1.174-1.833.268-.711.402-1.475.402-2.291h-3.523v3.006h.402c0 .329-.067.63-.201.905-.134.275-.324.511-.57.711-.246.199-.531.358-.858.475-.327.117-.675.176-1.042.176-.59 0-1.097-.105-1.521-.317-.424-.211-.754-.505-.991-.881-.237-.376-.356-.811-.356-1.304 0-.493.119-.928.356-1.304.237-.376.567-.67.991-.881.424-.211.931-.317 1.521-.317.313 0 .608.041.884.123.276.082.522.199.738.352.216.152.397.34.543.563l2.802-1.946c-.327-.47-.737-.87-1.229-1.198-.492-.329-1.042-.582-1.648-.758-.607-.176-1.241-.264-1.902-.264-1.096 0-2.095.176-2.997.528-.902.352-1.682.84-2.34 1.463-.657.623-1.168 1.357-1.533 2.203-.365.846-.548 1.763-.548 2.752 0 .999.183 1.922.548 2.769.365.846.876 1.58 1.533 2.203.658.623 1.438 1.11 2.34 1.463.902.352 1.901.528 2.997.528.661 0 1.295-.088 1.902-.264.606-.176 1.156-.429 1.648-.758.492-.329.902-.728 1.229-1.198l-2.802-1.946a2.262 2.262 0 0 1-.543.563 2.621 2.621 0 0 1-.738.352 3.028 3.028 0 0 1-.884.123c-.59 0-1.097-.105-1.521-.317-.424-.211-.754-.505-.991-.881-.237-.376-.356-.811-.356-1.304h7.046c.022-.235.033-.458.033-.67 0-.816-.134-1.58-.402-2.291-.268-.711-.659-1.322-1.174-1.833Z" />
                </svg>
                <span className="sr-only">Threads</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#download" className="text-muted-foreground hover:text-foreground">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/vpn-servers" className="text-muted-foreground hover:text-foreground">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/what-is-vpn" className="text-muted-foreground hover:text-foreground">
                  What is a VPN?
                </Link>
              </li>
              <li>
                <Link href="/money-back-guarantee" className="text-muted-foreground hover:text-foreground">
                  Money-Back Guarantee
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why-novix-vpn" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Novix VPN. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
          <div className="mt-4">
            <p>
              Support:{" "}
              <a href="mailto:novixvpna@gmail.com" className="text-primary hover:underline">
                novixvpna@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

