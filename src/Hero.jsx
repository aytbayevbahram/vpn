function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Want anything to be easy with <strong>LaslesVPN.</strong></h1>
        <p style={styles.subtitle}>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <button style={styles.btn}>Get Started</button>
      </div>
      <div style={styles.imageContainer}>
        {/* Rasm aynan shu yerda, ya'ni HTML qismida bo'lishi kerak */}
        <img src="/public/hero.svg" alt="Hero Illustration" style={styles.heroImg} />
      </div>
    </section>
  );
}

const styles = {
  hero: { display: 'flex', alignItems: 'center', padding: '50px 10%', gap: '50px' },
  content: { flex: 1 },
  title: { fontSize: '45px', color: '#0B132A', lineHeight: '1.4' },
  subtitle: { color: '#4F5665', margin: '20px 0 35px 0', lineHeight: '1.6' },
  btn: { background: '#F53838', color: '#fff', border: 'none', padding: '15px 60px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  imageContainer: { flex: 1 },
  heroImg: { width: '100%', height: 'auto', display: 'block' } 
};

export default Hero;
