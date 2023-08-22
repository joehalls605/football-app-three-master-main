const footballersData = [
  // Players from Premier League
  { _id: '1', name: 'Kevin De Bruyne', nationality: 'Belgium', position: 'Midfielder', league: 'Premier League', club: 'Manchester City' },
  { _id: '2', name: 'Antony', nationality: 'Brazil', position: 'Forward', league: 'Premier League', club: 'Manchester United' },
  { _id: '3', name: 'Mohamed Salah', nationality: 'Egypt', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { _id: '4', name: 'Bruno Fernandes', nationality: 'Portugal', position: 'Midfielder', league: 'Premier League', club: 'Manchester United' },
  { _id: '5', name: 'Jack Grealish', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Manchester City' },
  { _id: '6', name: 'Jota', nationality: 'Portugal', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { _id: '7', name: 'Nunez', nationality: 'Uruguay', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { _id: '8', name: 'Bissouma', nationality: 'Mali', position: 'Midfield', league: 'Premier League', club: 'Tottenham' },
  { _id: '9', name: 'Jesus', nationality: 'Brazil', position: 'Forward', league: 'Premier League', club: 'Arsenal'},
  { _id: '10', name: 'Haaland', nationality: 'Norway', position: 'Forward', league: 'Premier League', club: 'Manchester City'},
  { _id: '11', name: 'Havertz', nationality: 'Germany', position: 'Forward', league: 'Premier League', club: 'Arsenal'},
  { _id: '12', name: 'Hojbjerg', nationality: 'Denmark', position: 'Midfielder', league: 'Premier League', club: 'Tottenham'},
  { _id: '13', name: 'Isak', nationality: 'Sweden', position: 'Forward', league: 'Premier League', club: 'Newcastle'},
  { _id: '14', name: 'Tonali', nationality: 'Italy', position: 'Midfielder', league: 'Premier League', club: 'Newcastle'},
  { _id: '15', name: 'Partey', nationality: 'Ghana', position: 'Midfielder', league: 'Premier League', club: 'Arsenal'},
  { _id: '16', name: 'Rashford', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Manchester United'},
  { _id: '17', name: 'Romero', nationality: 'Argentina', position: 'Defender', league: 'Premier League', club: 'Tottenham'},
  { _id: '18', name: 'Saka', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Arsenal'},
  { _id: '19', name: 'Bernardo', nationality: 'Portugal', position: 'Forward', league: 'Premier League', club: 'Manchester City'},
  { _id: '20', name: 'Mount', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Manchester United'},
  { _id: '21', name: 'Sterling', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Chelsea'},
  { _id: '22', name: 'Kulusevski', nationality: 'Sweden', position: 'Forward', league: 'Premier League', club: 'Tottenham'},
  { _id: '23', name: 'Rodri', nationality: 'Spain', position: 'Midfielder', league: 'Premier League', club: 'Manchester City'},
  { _id: '24', name: 'Guimarães', nationality: 'Brazil', position: 'Midfielder', league: 'Premier League', club: 'Newcastle'},
  { _id: '25', name: 'Rice', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Arsenal'},
  { _id: '26', name: 'Van Dijk', nationality: 'Netherlands', position: 'Defender', league: 'Premier League', club: 'Liverpool'},
  { _id: '27', name: 'Mac Allister', nationality: 'Argentina', position: 'Midfielder', league: 'Premier League', club: 'Liverpool'},

  
  // { _id: '19', name: 'Max Aarons', nationality: 'England', club: 'Norwich City', height: '178 cm', position: 'Defender', league: 'Championship' },
  // { _id: '20', name: 'Ché Adams', nationality: 'Scotland', club: 'Southampton FC', height: '179 cm', position: 'Forward', league: 'Championship' },
  // { _id: '21', name: 'Ebou Adams', nationality: 'Gambia', club: 'Cardiff City', height: '178 cm', position: 'Midfielder', league: 'Championship' },
  // { _id: '22', name: 'Tyler Adams', nationality: 'United States', club: 'Leeds United', height: '175 cm', position: 'Midfielder', league: 'Championship' },
  // { _id: '23', name: 'Albert Adomah', nationality: 'Ghana', club: 'Queens Park Rangers', height: '185 cm', position: 'Midfielder', league: 'Championship' },
  // { _id: '24', name: 'Edwin Agbaje', nationality: 'Nigeria', club: 'Ipswich Town', height: '???', position: 'Forward', league: 'Championship' },
  // { _id: '25', name: 'Tyrell Agyemang', nationality: 'England', club: 'Middlesbrough FC', height: '183 cm', position: 'Midfielder', league: 'Championship' },
  // { _id: '26', name: 'Semi Ajayi', nationality: 'Nigeria', club: 'West Bromwich Albion', height: '193 cm', position: 'Defender', league: 'Championship' },
  // Add more data objects with nationalities...
];

export default footballersData;
