import styles from './TabGroup.module.css'

export default function TabGroup(props) {
  const {
    types,
    active,
    setActive,
  } = props

  return (
    <>
      <div className={styles.tabContainer}>
        {types.map(type => (
          <button
            key={type.value}
            active={active === type.value}
            onClick={() => setActive(type.value)}
            className={`${styles.tab}`+" "+`${active === type.value ? styles.active: " "}`}
          >
            <span className={`${active === type.value ? styles.tabTextActive : styles.tabText}`}>{type.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}