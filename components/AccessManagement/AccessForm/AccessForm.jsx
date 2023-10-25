import { useState } from 'react'
import styles from './AccessForm.module.css';
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button'


export default function AccessForm() {
  const [showGrantModal, setShowGrantModal] = useState(false)
  const [showRejectModal, setRejectGrantModal] = useState(false)
  console.log(showGrantModal, '-----', showRejectModal)
  const handleGrant = () => {
    if(showRejectModal){
      setRejectGrantModal(false)
    }
    setShowGrantModal(true)
  }

  const handleReject = () => {
    if(showGrantModal){
      setShowGrantModal(false)
    }
    setRejectGrantModal(true)
  }
    return (
      <div className={styles.container}>
        <div className={styles.btn}>
          <Button
              variant="xlarge"
              handleOnClick={handleGrant}
              isDarkBackground={true}
            >
                {Content.accessRequestForm.grantRequest}
          </Button>
        </div>
        <div className={styles.btn}>
          <Button
            variant="xlarge"
            isDanger={true}
            handleOnClick={handleReject}
            isDarkBackground={false}
          >
              {Content.accessRequestForm.rejectRequest}
          </Button>
        </div>
      </div>
    )
}
