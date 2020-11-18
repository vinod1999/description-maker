export const getImageLinks = (text) => {
  let re = /(https?.*?)"/gm;
  if (text == null) {
    return;
  }
  let matches = text.match(re);

  if (matches) {
    let matchList = Array.from(matches).map((url) => {
      return url.slice(0, url.length - 1);
    });

    return matchList;
  }
  return [];
};

export const getTextClean = (text) => {
  let isDisabled = false;
  let prohibitWords = [];
  let cleanedText = text;

  const re = /(aliexpress|alibaba|express|retail.*\s?|baba|alisave)|(dropshipping|drop.*?)|(www.aliexpress.com|www|.com|.net|@)|(http|ftp|https)|(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gim;
  const matches = text.match(re);
  if (!!matches) {
    matches.map((item) => {
      isDisabled = true;
      // let newLine = ` *${item}`
      cleanedText = cleanedText.replace(item, "");
      // text = text.replace(item, newLine)
      prohibitWords.push(item);
      return null;
    });
    return {
      text,
      isDisabled,
      prohibitWords,
      cleanedText,
    };
  } else {
    return {
      text,
      isDisabled,
      prohibitWords,
      cleanedText,
    };
  }
};
