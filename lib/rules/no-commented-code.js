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
        
        const variableDeclarationPattern = /\b(?:const|let|var)\b\s+(\w+|\[.*\])\s*(?:[=,;]|$)/;
        const functionPattern = /\bfunction\b\s+(\w+)\s*\(/;
        const controlFlowPattern = /\b(?:if|else|while|for|do|switch|try|catch|finally)\b\s*(?:\(|$)/;
        const returnPattern = /\breturn\b[^;]*;/;
        const classPattern = /\bclass\b\s+(\w+)/;
        const arrowFunctionPattern = /(\w+)\s*=>/;
        const objectPattern = /\{\s*(?:(?:\w+\s*:\s*.*|.*\s*,\s*)*)\}/;
        const arrayPattern = /\[\s*.*\s*\]\s*;/;
        const consoleLogPattern = /\bconsole\s*\.?\s*log\b\s*\(/;
        const jsxAttributePattern = /\s*(\w+)\s*=\s*"[^"]*"\s*/;
        const importPattern = /\s*import\s+.*from\s+['"].*['"];/;
        const expectPattern = /\s*expect\s*\([^)\n]+\)\.[\w$]+\s*\(/;

        comments.forEach((comment) => {
          const commentText = comment.value.trim();
          const hasCode =
            variableDeclarationPattern.test(commentText) ||
            functionPattern.test(commentText) ||
            controlFlowPattern.test(commentText) ||
            returnPattern.test(commentText) ||
            classPattern.test(commentText) ||
            arrowFunctionPattern.test(commentText) ||
            objectPattern.test(commentText) ||
            arrayPattern.test(commentText) ||
            consoleLogPattern.test(commentText) ||
            jsxAttributePattern.test(commentText) ||
            importPattern.test(commentText) ||
            expectPattern.test(commentText);

          if (
            (comment.type === 'Line'  && hasCode) ||
            (comment.type === 'Block' && hasCode)
          ) {
            context.report({
              node: comment,
              message: 'Commented-out code.',
            });
          }
        });
      },
    };
  },
};
