/**
 * FooterColumn — Single footer link column.
 *
 * React concept: **Conditional rendering** & **Rendering lists from data**.
 * Supports both a standard link list and a contact-info variant
 * (isContact flag triggers the alternate layout with phone + email).
 */
export default function FooterColumn({ title, links, isContact, contactInfo }) {
  return (
    <div className="footer-col">
      <h4 className="footer-col-title">{title}</h4>
      {isContact && contactInfo ? (
        <div className="footer-contact-info">
          <div className="footer-contact-item">
            <span className="footer-contact-label">Call :</span>
            <span className="footer-contact-value">{contactInfo.call}</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-label">Email:</span>
            <span className="footer-contact-value">{contactInfo.email}</span>
          </div>
        </div>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} id={link.id}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
