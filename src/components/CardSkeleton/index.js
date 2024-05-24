import { Skeleton } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton variant="rectangular" sx={{ height: 300, width: 300 }} />
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" sx={{ height: 100, width: 300 }} />
    </div>
  );
};
