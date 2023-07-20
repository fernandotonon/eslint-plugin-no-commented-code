module.exports = {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Disallow commented-out code',
        category: 'Best Practices',
        recommended: true,
      },
    },
    create(context) {
      return {
        Program(node) {
          const comments = context.getSourceCode().getAllComments();
          const codePattern = /(\bconsole\.log\b|\bconst\b|\blet\b|\bvar\b|\bfunction\b|\bif\b|\belse\b|\bwhile\b|\bfor\b|\bdo\b|\bswitch\b|\bcase\b|\btry\b|\bcatch\b|\bfinally\b|\bthrow\b|\bnew\b|\breturn\b|\bclass\b)/;
  
          comments.forEach((comment) => {
            const commentText = comment.value.trim();
            if (
              (comment.type === 'Line' && commentText.startsWith('//') && codePattern.test(commentText)) ||
              (comment.type === 'Block' && codePattern.test(commentText))
            ) {
              context.report({
                node: comment,
                message: 'Commented-out code is not allowed.',
              });
            }
          });
        },
      };
    },
  };
  