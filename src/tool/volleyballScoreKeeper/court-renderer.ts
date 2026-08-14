export interface CourtPlayerPosition {
  number: number;
  cx: number;
  cy: number;
  isServer: boolean;
  posName: string;
}

const TEAM_A_COORDINATES: Record<number, { x: number; y: number; name: string }> = {
  1: { x: 95, y: 225, name: 'P1' },
  2: { x: 235, y: 225, name: 'P2' },
  3: { x: 235, y: 150, name: 'P3' },
  4: { x: 235, y: 75, name: 'P4' },
  5: { x: 95, y: 75, name: 'P5' },
  6: { x: 95, y: 150, name: 'P6' },
};

const TEAM_B_COORDINATES: Record<number, { x: number; y: number; name: string }> = {
  1: { x: 505, y: 75, name: 'P1' },
  2: { x: 365, y: 75, name: 'P2' },
  3: { x: 365, y: 150, name: 'P3' },
  4: { x: 365, y: 225, name: 'P4' },
  5: { x: 505, y: 225, name: 'P5' },
  6: { x: 505, y: 150, name: 'P6' },
};

export function getTeamPlayerPositions(
  team: 'teamA' | 'teamB',
  rotationOrder: number[],
  isServing: boolean,
): CourtPlayerPosition[] {
  const coordsMap = team === 'teamA' ? TEAM_A_COORDINATES : TEAM_B_COORDINATES;
  const positions: CourtPlayerPosition[] = [];

  for (let slotIndex = 0; slotIndex < 6; slotIndex++) {
    const playerNum = rotationOrder[slotIndex] ?? (slotIndex + 1);
    const posSlot = slotIndex + 1;
    const coords = coordsMap[posSlot] ?? { x: 100, y: 100, name: `P${posSlot}` };
    const isServer = isServing && posSlot === 1;

    positions.push({
      number: playerNum,
      cx: coords.x,
      cy: coords.y,
      isServer,
      posName: coords.name,
    });
  }

  return positions;
}
