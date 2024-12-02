import { columns } from "./components/columns"
import { PlayersDataTable } from "./components/players-data-table"
import { Player } from "@/types/player"
import { useEffect, useState } from "react"

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const mockPlayers: Player[] = [
          {
            id: "1",
            name: "Patrick Mahomes",
            team: "KC",
            position: "QB",
            rank: 1,
            projectedPoints: 24.5,
            byeWeek: 10,
            status: "Questionable",
            fantasyPoints: 27.4,
          },
          {
            id: "2",
            name: "Josh Allen",
            team: "BUF",
            position: "QB",
            rank: 2,
            projectedPoints: 23.8,
            byeWeek: 7,
            status: "Active",
            fantasyPoints: 25.1,
          },
          {
            id: "3",
            name: "Christian McCaffrey",
            team: "SF",
            position: "RB",
            rank: 3,
            projectedPoints: 22.1,
            byeWeek: 9,
            status: "Out",
            fantasyPoints: 0,
          },
          {
            id: "4",
            name: "Justin Jefferson",
            team: "MIN",
            position: "WR",
            rank: 4,
            projectedPoints: 20.5,
            byeWeek: 13,
            status: "Injured Reserve",
            fantasyPoints: 0,
          },
          {
            id: "5",
            name: "Travis Kelce",
            team: "KC",
            position: "TE",
            rank: 5,
            projectedPoints: 19.2,
            byeWeek: 10,
            status: "Doubtful",
            fantasyPoints: 15.7,
          },
          // Adding more players to demonstrate pagination
          ...Array.from({ length: 15 }, (_, i) => ({
            id: `${i + 6}`,
            name: `Player ${i + 6}`,
            team: "TM",
            position: "RB",
            rank: i + 6,
            projectedPoints: 15.0,
            byeWeek: 8,
            status: "Active",
            fantasyPoints: 14.2,
          })),
        ]
        
        setPlayers(mockPlayers)
      } catch (error) {
        console.error("Error fetching players:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPlayers()
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center h-[400px]">
          Loading players...
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Players</h1>
      <PlayersDataTable columns={columns} data={players} />
    </div>
  )
} 