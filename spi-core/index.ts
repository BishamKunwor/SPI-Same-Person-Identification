import store from "store";

function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 === 0) return len2;
  if (len2 === 0) return len1;

  let matrix: number[][] = [];

  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
      }
    }
  }

  return matrix[len2][len1];
}

export function similarityPercentage(str1: string, str2: string): number {
  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  const similarity = 1 - distance / maxLength;
  return parseFloat((similarity * 100).toFixed(2));
}

export default function SpiChecker(record: any) {
  const usersInfoDb = store.get("usersInfo") || [];
  const similarUserList = [];
  for (let users of usersInfoDb) {
    const similarUser: any = {
      suspectedRecord: {},
      percentage: [],
    };
    for (let key in record) {
      if (
        key in users &&
        key !== "applicantSignature" &&
        key !== "applicantThumb" &&
        key !== "citizenshipBack" &&
        key != "citizenshipFront" &&
        key !== "passportSizePhoto"
      ) {
        similarUser.percentage.push(
          similarityPercentage(record[key], users[key])
        );
      }
    }
    // console.log(similarUser);
    let sum = 0;
    for (let item of similarUser.percentage) {
      sum += item;
    }
    similarUser.percentage = Math.round(sum / similarUser.percentage.length);
    similarUser.suspectedRecord = { ...users };
    if (similarUser.percentage > 60) {
      similarUserList.push(similarUser);
    }
  }
  return similarUserList;
}
