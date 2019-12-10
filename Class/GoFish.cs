using System;
using System.Collections.Generic;


namespace GoFish
{
    class Program
    {
        static void Main()
        {
            Game game = new Game();
        }

        public class Deck
        {
            static readonly Random rand = new Random();
            readonly List<Card> deck = new List<Card>();
            public Deck()
            {
                for (int suit = 1; suit <= 4; suit++)
                {
                    for (int value = 1; value <= 13; value++)
                    {
                        Card card = new Card
                        {
                            Value = value,
                            Suit = suit
                        };
                        deck.Add(card);
                    }
                }
            }

            public void Display()
            {
                foreach (Card card in deck)
                {
                    Console.WriteLine("Suit: {0} Value: {1}", card.Suit, card.Value);
                }
            }

            public void Shuffle()
            {
                int n = deck.Count;
                while (n > 1)
                {
                    n--;
                    int k = rand.Next(n + 1);
                    Card value = deck[k];
                    deck[k] = deck[n];
                    deck[n] = value;
                }
            }

            public Card Deal()
            {
                Card newCard = deck[0];
                deck.RemoveAt(0);
                return newCard;
            }
        }

        public class Card
        {
            public int Value { get; set; }

            public int Suit { get; set; }
        }

        public class Player
        {
            public void Deal(int cards, Deck deck)
            {
                for (int i = 0; i < cards; i++)
                {
                    Hand.Add(deck.Deal());
                }
            }

            public List<Card> Hand { get; } = new List<Card>();
        }



        public class Game
        {
            Deck deck = new Deck();
            int playerCount;
            int playerTurn;
            List<Player> players = new List<Player>();
            public Game()
            {
                Start();
            }

            public void Start()
            {
                deck.Shuffle();
                playerCount = GetPlayers();
                for (int i = 1; i <= playerCount; i++)
                {
                    Player player = new Player();
                    players.Add(player);
                }

                playerTurn = 1;
                Play();
            }

            public int GetPlayers()
            {
                Console.WriteLine("How many players? (1-2)");
                int playerCount = Int32.Parse(Console.ReadLine());

                while (playerCount < 1 && playerCount > 2)
                {
                    Console.WriteLine("Choose either 1 or 2");
                    playerCount = Int32.Parse(Console.ReadLine());
                }

                return playerCount;
            }

            public void Play()
            {
                for (int i = 0; i < players.Count; i++)
                {
                    players[i].Deal(7, deck);
                }

                while (!WinCondition(players[playerTurn], deck))
                {
                    Turn(players[playerTurn]);
                }
            }

            public void Turn(Player player)
            {

            }

            public void SwitchTurn()
            {
                if (playerTurn == 1)
                {
                    playerTurn = 2;
                }
                else
                {
                    playerTurn = 1;
                }
            }

            public bool WinCondition(Player player, Deck deck)
            {
                if (player.Hand.Count == 0)
                {

                }
            }
        }
    }
}