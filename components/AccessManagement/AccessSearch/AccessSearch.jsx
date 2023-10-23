import styles from './AccessSearch.module.css';
import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown'


export default function AccessSearch() {
  const getSelection = (value) => {
    console.log(value)
  }
  const options = Object.entries(Content.accessRequestSearchOptions).map(([k,v]) => {
    return  {label: v, value: k}
  });
console.log(options[0].value)
  return (
    <div className={styles.container}>
      <div className={styles.dropdownSection}>
        <Dropdown
            label={Content.managePINDropdown.label}
            options={options}
            handleSelection={getSelection}
            selectedValue={options[0].value}
        />
      </div>
      <div className={styles.searchInput}>

      </div>
    </div>
  )
}
