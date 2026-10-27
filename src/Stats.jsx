function Stats() {
  const statsData = [
    { icon: '👥', count: '90+', label: 'Users' },
    { icon: '📍', count: '30+', label: 'Locations' },
    { icon: '🖥️', count: '50+', label: 'Servers' }
  ];

  return (
    <div style={styles.statsContainer}>
      {statsData.map((item, index) => (
        <div key={index} style={{...styles.statItem, borderRight: index !== 2 ? '2px solid #EEEFF2' : 'none'}}>
          <div style={styles.icon}>{item.icon}</div>
          <div>
            <div style={styles.count}>{item.count}</div>
            <div style={styles.label}>{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  statsContainer: { display: 'flex', margin: '50px 10%', padding: '30px 0', background: '#fff', borderRadius: '10px', boxShadow: '0px 25px 45px rgba(13, 16, 37, 0.05)' },
  statItem: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' },
  icon: { fontSize: '30px', background: '#FFECEC', padding: '15px', borderRadius: '50%' },
  count: { fontSize: '22px', fontWeight: 'bold', color: '#0B132A' },
  label: { color: '#4F5665' }
};

export default Stats;
