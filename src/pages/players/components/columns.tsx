"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Player } from "@/types/player"
import { cn } from "@/lib/utils"

const getStatusDisplay = (status: string) => {
  const statusConfig = {
    Questionable: { text: "Q", className: "text-orange-500" },
    Doubtful: { text: "D", className: "text-red-500" },
    Out: { text: "Out", className: "text-red-500" },
    "Injured Reserve": { text: "IR", className: "text-red-500" },
  } as const

  return status in statusConfig ? statusConfig[status as keyof typeof statusConfig] : null
}

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: "Player",
    cell: ({ row }) => {
      const player = row.original
      const statusDisplay = player.status ? getStatusDisplay(player.status) : null

      return (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-medium">{player.name}</span>
            {statusDisplay && (
              <span className={cn("text-xs font-medium leading-none", statusDisplay.className)}>
                {statusDisplay.text}
              </span>
            )}
          </div>
          <div className="text-xs text-muted-foreground leading-tight">
            {player.position} {player.team} ({player.byeWeek})
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "fantasyPoints",
    header: "Fpts",
    cell: ({ row }) => (
      <div>
        {row.getValue<number>("fantasyPoints")?.toFixed(1)}
      </div>
    ),
  },
] 