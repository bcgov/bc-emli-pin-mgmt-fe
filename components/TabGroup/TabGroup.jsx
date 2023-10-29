import styles from './TabGroup.module.css'

export default function TabGroup(props) {
  const {
    types,
    activeTab,
    setActive,
  } = props

  return (
    <>
      <div className={styles.tabContainer}>
        {types.map(type => (
          <button
            key={type.value}
            active={activeTab === type.value}
            onClick={() => setActive(type.value)}
            className={`${styles.tab}`+" "+`${activeTab === type.value ? styles.active: ''}`}
          >
            <span className={`${activeTab === type.value ? styles.tabTextActive : styles.tabText}`}>{type.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}