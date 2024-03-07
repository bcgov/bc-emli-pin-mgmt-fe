import { useState, useContext } from 'react'
import styles from './AccessForm.module.css';
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button'
import GrantModal from '../GrantModal';
import RejectModal from '../RejectModal';
import { AccessContext } from '../../../context/accessContext/AccessState';

export default function AccessForm() {
  const { requestList, rowSelected } = useContext(AccessContext)
  const [showGrantModal, setShowGrantModal] = useState(false)
  const [showRejectModal, setRejectGrantModal] = useState(false)
  const [standardUserList, setStandardUserList] = useState([])
  const [adminUserList, setAdminUserList] = useState([])
  const handleGrant = () => {
    if(showRejectModal){
      setRejectGrantModal(false)
    }
    setShowGrantModal(true)
    setAdminUserList(getAdminUserList())
    setStandardUserList(getStandardUserList())
  }

  function getAdminUserList() {
    const adminUserList = rowSelected.filter((row) => row.requestedRole == 'Admin').map((row) => <li key={row.userId}>{row.givenName} {row.lastName}</li>) 
    return adminUserList
  }

  function getStandardUserList() {
    const standardUserList = rowSelected.filter((row) => row.requestedRole == 'Standard').map((row) => <li key={row.userId}>{row.givenName} {row.lastName}</li>) 
    return standardUserList
  }

  const handleReject = () => {
    if(showGrantModal){
      setShowGrantModal(false)
    }
    setRejectGrantModal(true)
    setAdminUserList(getAdminUserList())
    setStandardUserList(getStandardUserList())
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
          adminUserList={adminUserList}
          standardUserList={standardUserList}
        />
        <RejectModal
          isOpen={showRejectModal}
          setIsOpen={setRejectGrantModal}
          adminUserList={adminUserList}
          standardUserList={standardUserList}
        />
      </div>
    )
}
