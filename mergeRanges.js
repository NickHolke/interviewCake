function mergeRanges(meetings) {

  let meetingsCopy = JSON.parse(JSON.stringify(meetings));
  meetingsCopy.sort((a, b) => a.startTime - b.startTime);
  
  let merged = [meetingsCopy[0]];
  
  for (let i = 1; i < meetingsCopy.length; i++) {
    let currentMeeting = meetingsCopy[i];
    let lastMeeting = merged[merged.length - 1];

    if (lastMeeting.endTime >= currentMeeting.startTime) {
      lastMeeting.endTime = Math.max(lastMeeting.endTime, currentMeeting.endTime);
    } else {
      merged.push(currentMeeting);
    }
  }
  
  return merged;
}
