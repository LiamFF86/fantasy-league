export interface Player {
  id: string
  name: string
  team: string
  position: 'QB' | 'RB' | 'WR' | 'TE' | 'K' | 'DEF'
  rank: number
  projectedPoints: number
  byeWeek: number
  status?: 'Questionable' | 'Doubtful' | 'Out' | 'Injured Reserve'
  fantasyPoints: number
} 