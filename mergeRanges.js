function mergeRanges(meetings) {

  // Merge meetings ranges
  meetings.sort((a, b) => a.startTime - b.startTime);
  
  let currentMeeting = meetings[0];
  let merged = [];
  
  for (let i = 1; i < meetings.length; i++) {
    let compareMeeting = meetings[i];
    if (currentMeeting.endTime >= compareMeeting.startTime) {
      currentMeeting.endTime = Math.max(compareMeeting.endTime, currentMeeting.endTime);
    } else {
      merged.push(currentMeeting);
      currentMeeting = compareMeeting;
    }
    
    if (i === meetings.length - 1) {
      merged.push(currentMeeting);
    }
  }
  
  return merged;
}
