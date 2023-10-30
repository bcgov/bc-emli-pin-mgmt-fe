import { useState, useContext } from 'react'
import styles from './UserUpdate.module.css';
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'

export default function UserUpdate() {
  const { rowSelected } = useContext(UserManagementContext)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const handleEdit = () => {
    if(showDeactivateModal){
      setShowDeactivateModal(false)
    }
    setShowEditModal(true)
  }

  const handleDeactivate = () => {
    if(showEditModal){
      setShowEditModal(false)
    }
    setShowDeactivateModal(true)
  }
    return (
      <div className={styles.container}>
        <div className={styles.btn}>
          <Button
              variant="xlarge"
              handleOnClick={handleEdit}
              isDarkBackground={true}
              disabled={rowSelected.length > 1}
            >
                {Content.userUpdateForm.editUser}
          </Button>
        </div>
        <div className={styles.btn}>
          <Button
            variant="xlarge"
            isDanger={true}
            handleOnClick={handleDeactivate}
            isDarkBackground={false}
          >
              {Content.userUpdateForm.deactivateUser}
          </Button>
        </div>
      </div>
    )
}
