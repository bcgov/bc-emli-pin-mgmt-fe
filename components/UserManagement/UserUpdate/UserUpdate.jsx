import { useState, useContext } from 'react'
import styles from './UserUpdate.module.css';
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import EditModal from '../EditModal/EditModal';
import DeactivateModal from '../DeactivateModal/DeactivateModal'

export default function UserUpdate(role) {
  const { rowSelected, usersList } = useContext(UserManagementContext)
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
              disabled={rowSelected.length !== 1 || usersList.length === 0}
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
            disabled={usersList.length === 0}
          >
              {Content.userUpdateForm.deactivateUser}
          </Button>
        </div>
        {rowSelected.length === 1 &&
          <EditModal
          isOpen={showEditModal}
          setIsOpen={setShowEditModal}
          role={role?.role}
          userName={role?.userName}
        />
        }
        
        <DeactivateModal
          isOpen={showDeactivateModal}
          setIsOpen={setShowDeactivateModal}
        />
      </div>
    )
}
