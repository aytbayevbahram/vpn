function Pricing() {
  const plans = [
    { title: "Free Plan", features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs"], price: "Free" },
    { title: "Standard Plan", features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"], price: "$9 / mo" },
    { title: "Premium Plan", features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anywhere"], price: "$12 / mo" }
  ];

  return (
    <section style={styles.pricingSection}>
      <div style={styles.header}>
        <h2 style={styles.title}>Choose Your Plan</h2>
        <p style={styles.subtitle}>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div style={styles.grid}>
        {plans.map((plan, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.boxIcon}>📦</div>
            <h3 style={styles.planTitle}>{plan.title}</h3>
            <ul style={styles.planList}>
              {plan.features.map((f, i) => <li key={i} style={styles.planItem}>✓ {f}</li>)}
            </ul>
            <div style={styles.footer}>
              <div style={styles.price}>{plan.price}</div>
              <button style={styles.selectBtn}>Select</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  pricingSection: { background: '#F8F8F8', padding: '80px 10%' },
  header: { textAlign: 'center', marginBottom: '50px' },
  title: { fontSize: '35px', color: '#0B132A' },
  subtitle: { color: '#4F5665', marginTop: '15px' },
  grid: { display: 'flex', gap: '30px', justifyContent: 'center' },
  card: { background: '#fff', border: '2px solid #DDE2E5', borderRadius: '10px', padding: '50px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', textAlign: 'center' },
  boxIcon: { fontSize: '60px', marginBottom: '30px' },
  planTitle: { fontSize: '18px', color: '#0B132A', marginBottom: '30px' },
  planList: { listStyle: 'none', padding: 0, flexGrow: 1, textAlign: 'left', marginBottom: '50px' },
  planItem: { color: '#4F5665', marginBottom: '10px' },
  footer: { marginTop: 'auto' },
  price: { fontSize: '25px', fontWeight: 'bold', color: '#0B132A', marginBottom: '20px' },
  selectBtn: { border: '2px solid #F53838', color: '#F53838', background: 'none', padding: '10px 45px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }
};

export default Pricing;
