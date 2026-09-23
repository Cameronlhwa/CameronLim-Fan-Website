import { Link } from 'react-router-dom';
import CreatorFrame from './CreatorFrame';
import { destinations } from './destinations';
import './RatesPage.css';

const rates = [
  {
    id: 'integration',
    name: 'YouTube long-form integration',
    detail: '60–90 seconds inside a video',
    price: '$3,000',
    featured: true,
  },
  {
    id: 'short',
    name: 'YouTube Short',
    detail: 'A short-form video on YouTube',
    price: '$300',
  },
  {
    id: 'reel',
    name: 'Instagram Reel',
    detail: 'A short-form video on Instagram',
    price: '$300',
  },
  {
    id: 'package',
    name: 'YouTube Short + Instagram Reel',
    detail: 'Both short-form videos, as a package',
    price: '$500',
    badge: 'Package',
    featured: true,
  },
];

const included = [
  {
    title: 'Usage rights',
    body: 'Organic posting on the agreed platform is included. Paid usage beyond that is quoted separately.',
  },
  {
    title: 'Whitelisting',
    body: 'Available on request, and quoted together with the campaign.',
  },
  {
    title: 'Exclusivity',
    body: 'Category exclusivity is available on request.',
  },
  {
    title: 'Revisions',
    body: 'One round of revisions is included.',
  },
];

const RatesPage = () => (
  <CreatorFrame pathLabel="/links/rates" title="Cameron Lim — Rates">
    <h1 className="creator-title">Deliverable rates</h1>
    <p className="creator-lede">
      These are flat fees in USD. I’m also open to custom packages if a campaign needs something more specific.
    </p>

    <ul className="rates-grid">
      {rates.map((rate) => (
        <li
          key={rate.id}
          className={`rate-card${rate.featured ? ' rate-card-featured' : ''}`}
        >
          <div className="rate-card-copy">
            {rate.badge && <span className="rate-badge">{rate.badge}</span>}
            <h2>{rate.name}</h2>
            <p>{rate.detail}</p>
          </div>
          <p className="rate-price">
            {rate.price}
            <span> USD</span>
          </p>
        </li>
      ))}
    </ul>

    <section className="rates-included" aria-labelledby="rates-included-heading">
      <h2 id="rates-included-heading">A few details</h2>
      <ul>
        {included.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>

    <div className="rates-cta">
      <Link to={destinations.work} className="creator-button">
        Work with me
      </Link>
    </div>
  </CreatorFrame>
);

export default RatesPage;
