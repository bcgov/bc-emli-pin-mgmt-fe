import { useState, useContext } from 'react'
import styles from './AccessForm.module.css';
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button'
import GrantModal from '../GrantModal';
import RejectModal from '../RejectModal';
import { AccessContext } from '../../../context/accessContext/AccessState';

export default function AccessForm() {
  const { requestList } = useContext(AccessContext)
  const [showGrantModal, setShowGrantModal] = useState(false)
  const [showRejectModal, setRejectGrantModal] = useState(false)
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
              disabled={requestList.length === 0}
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
            disabled={requestList.length === 0}
          >
              {Content.accessRequestForm.rejectRequest}
          </Button>
        </div>
        <GrantModal
          isOpen={showGrantModal}
          setIsOpen={setShowGrantModal}
        />
        <RejectModal
          isOpen={showRejectModal}
          setIsOpen={setRejectGrantModal}
        />
      </div>
    )
}
