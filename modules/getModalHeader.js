const getModalHeader = (modalTitle, submitText, cancelText) => {
  return {
    type: "modal",
    title: {
      type: "plain_text",
      text: `${modalTitle}`,
      emoji: true
    },
    submit: {
      type: "plain_text",
      text: `${submitText}`,
      emoji: true
    },
    close: {
      type: "plain_text",
      text: `${cancelText}`,
      emoji: true
    }
  };
};

module.exports = getModalHeader;
