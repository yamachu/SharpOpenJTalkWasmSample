let playedBlob;
export function convertToBlob(wavBuffer, audioElement) {
  const blob = new Blob([wavBuffer], { type: "audio/wav" });
  const url = window.URL.createObjectURL(blob);
  audioElement.src = url;
  if (playedBlob !== undefined) {
    window.URL.revokeObjectURL(playedBlob);
    playedBlob = undefined;
  }
}
