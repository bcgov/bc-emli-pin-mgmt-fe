import { useEffect } from 'react'

// Close dropdown menu on outside click or tab
export const useClickOutSide = (
    toggleButtonRef, // ref of parent elemenet which will show/hide the dropdown container
    dropdownContainerRef, // ref of dropdown conatiner which will show the content
    toggleDropDownFunc // callback function to handle the state of the dropdown
) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownContainerRef.current &&
                toggleButtonRef.current &&
                !dropdownContainerRef.current.contains(event.target) &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                toggleDropDownFunc(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleClickOutside)
        return () => {
            //event cleanup on unmount
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleClickOutside)
        }
    }, [dropdownContainerRef, toggleButtonRef, toggleDropDownFunc])
}
