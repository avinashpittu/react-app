import React from 'react'
import styles from './Modal.module.css'
import Aux from '../../hoc/Auxiliary'
import Backdrop from '../Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show}
            clicked={props.modalClosed}
            color={props.color} />

        <div className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;