import React from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo ,FiXCircle } from 'react-icons/fi';
import { useTransition } from 'react-spring';

import { ToastMessage, useToast } from '../../hooks/toast';
import { Container, Toast }  from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const icons = {
  info: <FiInfo  size={24}/>,
  error: <FiAlertCircle  size={24}/>,
  success: <FiCheckCircle  size={24}/>,
};

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  )

  const { removeToast } = useToast();

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast style={props} type={item.type} key={key} hasDescription={!!item.description}>
        {icons[item.type || 'info']}
        <div>
          <strong>{item.title}</strong>
          { item.description && <p>{item.description}</p>}
        </div>
        <button onClick={()=>{removeToast(item.id)}} type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      ))}
    </Container>
  )
}

export default ToastContainer
