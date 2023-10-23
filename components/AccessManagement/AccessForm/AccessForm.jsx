import { useState } from 'react'
import styles from './AccessForm.module.css';
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button'


export default function AccessForm() {
  const [showGrantModal, setShowGrantModal] = useState(false)
  const [showRejectModal, setRejectGrantModal] = useState(false)
  const handleClick = () => {
    console.log(showGrantModal,"----",showRejectModal )
  }


    return (
      <div className={styles.container}>
        <div className={styles.btn}>
          <Button
              variant="primary"
              handleOnClick={handleClick}
              isDarkBackground={true}
            >
                {Content.accessRequestForm.grantRequest}
          </Button>
        </div>
        <div className={styles.btn}>
          <Button
            variant="primary"
            handleOnClick={handleClick}
            isDarkBackground={false}
          >
              {Content.accessRequestForm.rejectRequest}
          </Button>
        </div>
      </div>
    )
}
