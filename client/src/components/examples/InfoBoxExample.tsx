import InfoBox from "../InfoBox";

export default function InfoBoxExample() {
  return (
    <div className="p-4 space-y-4">
      <InfoBox type="info">
        Functions are reusable blocks of code that perform specific tasks.
      </InfoBox>
      <InfoBox type="tip">
        Use arrow functions for cleaner syntax when writing simple functions.
      </InfoBox>
      <InfoBox type="warning">
        Be careful with global variables inside functions - they can cause unexpected behavior.
      </InfoBox>
    </div>
  );
}
