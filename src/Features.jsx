function Features() {
  const featuresList = [
    "Powerful online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific logs."
  ];

  return (
    <section style={styles.features}>
      <div style={styles.imageContainer}>
        <img src="/public/feauteres.svg" alt="Features" style={styles.featuresImg} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>We Provide Many Features You Can Use</h2>
        <p style={styles.subtitle}>You can explore the features that we provide with fun and have their own features each feature.</p>
        <ul style={styles.list}>
          {featuresList.map((feature, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.check}>✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const styles = {
  features: { display: 'flex', alignItems: 'center', padding: '50px 10%', gap: '50px' },
  imageContainer: { flex: 1 },
  featuresImg: { width: '100%', height: 'auto', display: 'block' },
  content: { flex: 1 },
  title: { fontSize: '35px', color: '#0B132A', marginBottom: '20px' },
  subtitle: { color: '#4F5665', marginBottom: '20px', lineHeight: '1.6' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', color: '#4F5665' },
  check: { color: '#2FAB73', fontWeight: 'bold' }
};

export default Features;
