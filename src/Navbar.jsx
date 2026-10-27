function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src="/public/Logo (11).svg" alt="LaslesVPN Logo" style={styles.logoImg} />
      </div>
      <ul style={styles.menu}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#features" style={styles.link}>Features</a></li>
        <li><a href="#pricing" style={styles.link}>Pricing</a></li>
        <li><a href="#testimonials" style={styles.link}>Testimonials</a></li>
        <li><a href="#help" style={styles.link}>Help</a></li>
      </ul>
      <div style={styles.auth}>
        <button style={styles.signInBtn}>Sign In</button>
        <button style={styles.signUpBtn}>Sign Up</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 10%' },
  logoContainer: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoImg: { height: '35px', width: 'auto', display: 'block' },
  logoText: { fontSize: '20px', color: '#0B132A' },
  menu: { display: 'flex', listStyle: 'none', gap: '30px' },
  link: { textDecoration: 'none', color: '#4F5665', fontSize: '16px' },
  auth: { display: 'flex', gap: '20px', alignItems: 'center' },
  signInBtn: { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', color: '#0B132A' },
  signUpBtn: { border: '1px solid #F53838', color: '#F53838', padding: '10px 25px', borderRadius: '50px', background: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }
};

export default Navbar;
