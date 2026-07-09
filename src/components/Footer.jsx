import { legal } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__owner">{legal.owner}</p>
      <p className="footer__ogrn">{legal.ogrn}</p>
      <p className="footer__disclaimer">{legal.disclaimer}</p>
    </footer>
  )
}
