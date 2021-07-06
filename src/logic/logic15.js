window.logic15 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (cmd_isset(5)) {
          cmd_load_pic(0);
          cmd_draw_pic(0);
          cmd_discard_pic(0);
          cmd_set_horizon(0);
          cmd_status_line_on();
          cmd_accept_input();
          cmd_load_view(150);
          cmd_animate_obj(150);
          cmd_set_view(150, 150);
          cmd_set_loop(150, 0);
          cmd_set_cel(150, 0);
          cmd_ignore_blocks(150);
          cmd_ignore_objs(150);
          cmd_position(150, 69, 167);
          cmd_draw(150);
          cmd_position(0, 80, 166);
          cmd_set_loop(0, 2);
          cmd_load_view(152);
          cmd_animate_obj(1);
          cmd_set_view(1, 152);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_position(1, 79, 166);
          cmd_draw(1);
          cmd_end_of_loop(1, 79);
          cmd_assignn(42, 0);
          cmd_load_sound(15);
          cmd_sound(15, 147);
          cmd_show_pic();
        }
        if (cmd_isset(147) && !cmd_isset(148)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(1);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(15, 147);
        }
      case 1:
        if (cmd_isset(79)) {
          cmd_reset(79);
          cmd_set(93);
          cmd_erase(1);
          cmd_assignn(6, 0);
          cmd_draw(0);
        }
      case 2800:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m1);
              cmd_print(m2);
              cmd_print(m3);
              jumptoLineArray = [2800, 28000];
              ifSkipArray = [true];
              jumpTo(2800, 15);
              break logic;
            case 28000:
              if (cmd_isset(124)) {
                cmd_print(m4);
                jumptoLineArray = [2801];
                jumpTo(2801, 15);
                break logic;
              }
          }
        }
      case 2801:
        if (cmd_said(15, 36)) {
          cmd_print(m5);
          jumptoLineArray = [2802];
          jumpTo(2802, 15);
          break logic;
        }
      case 2802:
        if (cmd_said(15, 33)) {
          cmd_print(m6);
          jumptoLineArray = [2803];
          jumpTo(2803, 15);
          break logic;
        }
      case 2803:
        if (cmd_said(15, 31)) {
          cmd_print(m7);
          jumptoLineArray = [2804];
          jumpTo(2804, 15);
          break logic;
        }
      case 2804:
        if (cmd_said(15, 40)) {
          cmd_print(m8);
          jumptoLineArray = [2805];
          jumpTo(2805, 15);
          break logic;
        }
      case 2805:
        if (
          cmd_said(15, 121) ||
          cmd_said(15, 121) ||
          cmd_said(15, 121, 43) ||
          cmd_said(15, 43)
        ) {
          cmd_print(m9);
          jumptoLineArray = [2806];
          jumpTo(2806, 15);
          break logic;
        }
      case 2806:
        if (cmd_said(15, 37) || cmd_said(15, 122, 37)) {
          cmd_print(m10);
          jumptoLineArray = [2807];
          jumpTo(2807, 15);
          break logic;
        }
      case 2807:
        if (cmd_said(15, 123)) {
          cmd_print(m11);
          jumptoLineArray = [2808];
          jumpTo(2808, 15);
          break logic;
        }
      case 2808:
        if (cmd_said(15, 32)) {
          cmd_print(m12);
          jumptoLineArray = [2809];
          jumpTo(2809, 15);
          break logic;
        }
      case 2809:
      case 2810:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 76) || cmd_said(77, 76) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m13);
              cmd_print(m14);
              jumptoLineArray = [2810, 28000];
              ifSkipArray = [true];
              jumpTo(2810, 15);
              break logic;
            case 28000:
              if (!cmd_isset(253)) {
                cmd_set(253);
                cmd_increment(3);
              }
          }
        }
        if (
          cmd_said(15, 116) ||
          cmd_said(15, 115, 117, 116) ||
          cmd_said(15, 116, 117, 115)
        ) {
          cmd_print(m15);
          jumptoLineArray = [2811];
          jumpTo(2811, 15);
          break logic;
        }
      case 2811:
        if (cmd_said(15, 34)) {
          cmd_print(m16);
          jumptoLineArray = [2812];
          jumpTo(2812, 15);
          break logic;
        }
      case 2812:
        if (cmd_said(15, 35)) {
          cmd_print(m17);
          cmd_print(m18);
          cmd_print(m19);
          jumptoLineArray = [2813];
          jumpTo(2813, 15);
          break logic;
        }
      case 2813:
      case 2814:
        ifSkip = ifSkipArrayShift();
        if (
          (cmd_isset(124) &&
            (cmd_said(15, 124) || cmd_said(15, 124, 19) || cmd_said(15, 19))) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(251) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m20);
                    jumptoLineArray = [2814, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2814, 15);
                    break logic;
                  case 280000:
                    jumpTo(2);
                    break logicSwitch;
                }
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(249) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m21);
                    jumptoLineArray = [2814, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2814, 15);
                    break logic;
                  case 280000:
                    jumpTo(2);
                    break logicSwitch;
                }
              }
            case 28002:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(248) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m22);
                    jumptoLineArray = [2814, 28002, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2814, 15);
                    break logic;
                  case 280000:
                    jumpTo(2);
                    break logicSwitch;
                }
              }
              if (cmd_isset(124)) {
                cmd_print(m23);
                jumptoLineArray = [2817];
                jumpTo(2817, 15);
                break logic;
              }
          }
        }
      case 2817:
      case 2:
      case 2818:
        ifSkip = ifSkipArrayShift();
        if (
          cmd_said(125, 19) ||
          cmd_said(125, 124) ||
          cmd_said(125, 124, 19) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(251) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m24);
                    jumptoLineArray = [2818, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2818, 15);
                    break logic;
                  case 280000:
                    jumpTo(3);
                    break logicSwitch;
                }
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(124) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m25);
                    jumptoLineArray = [2818, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2818, 15);
                    break logic;
                  case 280000:
                    jumpTo(3);
                    break logicSwitch;
                }
              }
              if (cmd_posn(0, 59, 98, 96, 112)) {
                cmd_move_obj(0, 86, 99, 1, 80);
                jumpTo(3);
                break logicSwitch;
              }
              cmd_print(m26);
              cmd_print(m27);
              jumptoLineArray = [2820];
              jumpTo(2820, 15);
              break logic;
          }
        }
      case 2820:
      case 3:
        if (cmd_isset(80)) {
          cmd_reset(80);
          cmd_load_view(154);
          cmd_set_view(1, 154);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_get_posn(0, 30, 31);
          cmd_subn(30, 7);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_increment(84);
          cmd_set_priority_v(1, 84);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_end_of_loop(1, 81);
        }
        if (cmd_isset(81)) {
          cmd_reset(81);
          cmd_reposition_to(254, 68, 97);
          cmd_set_loop(254, 3);
          if (!cmd_isset(248)) {
            cmd_set(248);
            cmd_increment(3);
          }
          cmd_assignn(91, 6);
          cmd_cycle_time(254, 91);
          cmd_normal_cycle(254);
          cmd_erase(1);
          cmd_set_loop(0, 1);
          cmd_set_cel(0, 3);
          cmd_draw(0);
        }
      case 2821:
        ifSkip = ifSkipArrayShift();
        if (
          cmd_said(95, 19) ||
          cmd_said(95, 124) ||
          cmd_said(95, 124, 19) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(251) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m24);
                    jumptoLineArray = [2821, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2821, 15);
                    break logic;
                  case 280000:
                    jumpTo(4);
                    break logicSwitch;
                }
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(124) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m25);
                    jumptoLineArray = [2821, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2821, 15);
                    break logic;
                  case 280000:
                    jumpTo(4);
                    break logicSwitch;
                }
              }
            case 28002:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(248) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m28);
                    jumptoLineArray = [2821, 28002, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2821, 15);
                    break logic;
                  case 280000:
                    jumpTo(4);
                    break logicSwitch;
                }
              }
              if (cmd_posn(0, 59, 98, 96, 112)) {
                cmd_move_obj(0, 86, 99, 1, 82);
                jumpTo(4);
                break logicSwitch;
              }
              cmd_print(m26);
              cmd_print(m27);
              jumptoLineArray = [2824];
              jumpTo(2824, 15);
              break logic;
          }
        }
      case 2824:
      case 4:
        if (cmd_isset(82)) {
          cmd_reset(82);
          cmd_load_view(154);
          cmd_set_view(1, 154);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_get_posn(0, 30, 31);
          cmd_subn(30, 7);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_increment(84);
          cmd_set_priority_v(1, 84);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_end_of_loop(1, 83);
        }
        if (cmd_isset(83)) {
          cmd_reset(83);
          if (!cmd_isset(249)) {
            cmd_set(249);
            cmd_increment(3);
          }
          cmd_assignn(91, 4);
          cmd_cycle_time(254, 91);
          cmd_erase(1);
          cmd_set_loop(0, 1);
          cmd_set_cel(0, 3);
          cmd_draw(0);
        }
      case 2825:
        ifSkip = ifSkipArrayShift();
        if (
          cmd_said(126, 127, 128) ||
          cmd_said(126, 127, 128, 19) ||
          cmd_said(126, 127, 128, 124) ||
          cmd_said(126, 127, 128, 124, 19) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(251) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m24);
                    jumptoLineArray = [2825, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2825, 15);
                    break logic;
                  case 280000:
                    jumpTo(5);
                    break logicSwitch;
                }
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(124) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m25);
                    jumptoLineArray = [2825, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2825, 15);
                    break logic;
                  case 280000:
                    jumpTo(5);
                    break logicSwitch;
                }
              }
            case 28002:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(248) || !cmd_isset(249) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m29);
                    jumptoLineArray = [2825, 28002, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2825, 15);
                    break logic;
                  case 280000:
                    jumpTo(5);
                    break logicSwitch;
                }
              }
              if (cmd_posn(0, 59, 98, 96, 112)) {
                cmd_move_obj(0, 86, 99, 1, 84);
                jumpTo(5);
                break logicSwitch;
              }
              cmd_print(m26);
              cmd_print(m27);
              jumptoLineArray = [2828];
              jumpTo(2828, 15);
              break logic;
          }
        }
      case 2828:
      case 5:
      case 2829:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(84) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(84);
              cmd_set_loop(0, 1);
              cmd_set_cel(0, 3);
              cmd_print(m30);
              cmd_print(m31);
              jumptoLineArray = [2829, 28000];
              ifSkipArray = [true];
              jumpTo(2829, 15);
              break logic;
            case 28000:
              if (!cmd_isset(250)) {
                cmd_set(250);
                cmd_increment(3);
              }
              cmd_assignn(91, 1);
              cmd_cycle_time(254, 91);
              cmd_assignn(74, 0);
              cmd_set(85);
              cmd_prevent_input();
              cmd_program_control();
          }
        }
        if (cmd_isset(85)) {
          cmd_increment(74);
          if (cmd_equaln(74, 40)) {
            cmd_reset(85);
            cmd_set_loop(254, 4);
            cmd_set_cel(254, 0);
            cmd_assignn(90, 8);
            cmd_set_dir(254, 90);
            cmd_assignn(92, 2);
            cmd_step_size(254, 92);
            cmd_end_of_loop(254, 86);
          }
        }
        if (cmd_isset(86)) {
          cmd_reset(86);
          cmd_set_loop(254, 5);
          cmd_set_cel(254, 0);
          cmd_assignn(90, 8);
          cmd_set_dir(254, 90);
          cmd_assignn(92, 2);
          cmd_step_size(254, 92);
          cmd_end_of_loop(254, 87);
        }
        if (cmd_isset(87)) {
          cmd_reset(87);
          cmd_follow_ego(254, 4, 88);
        }
      case 2830:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(88) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(88);
              cmd_erase(254);
              cmd_get(i18);
              cmd_show_obj(237);
              jumptoLineArray = [2830, 28000];
              ifSkipArray = [true];
              jumpTo(2830, 15);
              break logic;
            case 28000:
              cmd_set(251);
              cmd_increment(3);
              cmd_accept_input();
              cmd_player_control();
          }
        }
        if (cmd_isset(0)) {
          cmd_load_view(6);
          cmd_set_view(0, 6);
          jumpTo(6);
          break logicSwitch;
        }
        cmd_set_view(0, 0);
      case 6:
        if (cmd_isset(3) && cmd_isset(93) && !cmd_isset(89)) {
          cmd_set(89);
          cmd_load_view(151);
          cmd_set_view(1, 151);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_get_posn(0, 30, 31);
          cmd_decrement(30);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_set_priority_v(1, 84);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_end_of_loop(1, 90);
        }
        if (cmd_isset(90)) {
          cmd_reset(90);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_position_v(1, 30, 31);
          cmd_end_of_loop(1, 91);
        }
        if (cmd_isset(91)) {
          cmd_reset(91);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 3);
          cmd_decrement(30);
          cmd_position_v(1, 30, 31);
          cmd_reverse_loop(1, 92);
        }
      case 2831:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(92) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(92);
              cmd_reset(89);
              cmd_decrement(30);
              cmd_increment(31);
              cmd_position_v(0, 30, 31);
              cmd_assignn(6, 7);
              cmd_erase(1);
              cmd_draw(0);
              if (!cmd_isset(252)) {
                cmd_set(252);
                cmd_increment(3);
                cmd_print(m32);
                cmd_print(m33);
                jumptoLineArray = [2832];
                jumpTo(2832, 15);
                break logic;
              }
          }
        }
      case 2832:
        if (cmd_equaln(2, 3) && !cmd_isset(77)) {
          cmd_set(77);
          cmd_set_view(1, 152);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 14);
          cmd_get_posn(0, 30, 31);
          cmd_decrement(30);
          cmd_position_v(1, 30, 31);
          cmd_erase(0);
          cmd_draw(1);
          cmd_reverse_loop(1, 78);
        }
        if (cmd_isset(78)) {
          cmd_reset(77);
          cmd_reset(78);
          cmd_new_room(13);
          if (AGI.break_all_logics) return;
        }
        return;
    }
  }
};
MESSAGES[15] = [
  '',
  'You have reached the mountaintop...',
  'And it is good...',
  'Though quite strange. An oasis occupies the center of the meadow. Bordering the area are rocks, walls, and a harrowing precipice. A welcoming sign is posted for all to see. A calmness fills the air.',
  'Oh, and there is a Heart Elemental hovering above the water.',
  'There is another strange mountain in the distance. Do not concern yourself with that mountain. Your current mountain is much more interesting.',
  'The area is bordered on both sides by finely detailed rocks of all different styles.',
  'Two types of walls have been built here to add to the beauty. How nice.',
  'It seems well maintained.',
  'A pool of water, skirted by sand and a majestic palm tree, seems to be the main attraction...',
  'The palm tree resides in a climate that should be much too harsh. Then again, the weather is quite comfortable here.',
  "It's like a mini-beach. But there is no time to tan.",
  "It's a far drop to the valley below. Be careful!",
  'The sign reads:',
  "    Anare's Tranquility    \n\n          Welcome          \n\n   Feel Free to Feel Home  \n\n        XXXOOO Love        ",
  "It's how you got here. Looks like the only way to get here.",
  "It's blue and it's high. You are neither.",
  'I believe I can fly...',
  'No.',
  "No, you don't.",
  "You have plenty of heart, now go get 'em champ!",
  "The Heart Elemental is really beating for you. It's totally pining for you! Let it know how you feel!",
  'The Heart Elemental is beating for you, but only slightly.',
  'The lonely Heart Elemental has a certain stillness to it.',
  'There is no heart left.',
  "Where's the love?",
  'Are you into long distance relationships?',
  'Get closer.',
  "I don't think you know each other that well.",
  "I don't think your relationship is ready for that step.",
  'You proclaim for all to hear...',
  '"I love you!"',
  'Phew! That was close!',
  "Something tells you that you can't die here. But at least you're trying!",
];
CONTROLS[15] =
  '?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4>.E7>+>.467>{>,697>{>{697>,>+6E7>,>^6E7>.4>!6K7>.4>x6K7>.9>r6P7>.9>gBP7>.E>Z6Z7>.E>U6g7>.E>P6l7>.E>K6x7>.9>K6xC>.4>E6+C>{>E6,H>!>96.KN>g>96.gS>E<.,B.+cZH<.E<.{6<ZXK7<.9<.^B<.97<.4<.rG<.P7<,<.UM<.g7<,<.EG<.^7<{<,G>47<+<+B>PC<!.^5.46>gC<r.!5.6>xH<Z.!5>.{X<4.x5><UN.^.x5><l7.^.r5><x7.!.r5><x7.!.l5><x57.!.g5><^5.!.g5><^5.!.Z5<.gd<.4A.r.U5<.P.3<+5.l.U5<.E.Y<xA.Z.P5<.9.w<x5.U.K5<.4.-<x5.P.E5<.4.]<x5.P.E5<{<3<!A.E.95<{<8<+F,.45<+<J<.4F^,5<^<T<.KAx,5<!<T<.Z5r.45<r<O<.r5l.45<l<Orh<r5l.95<Z<Tr5Z5<x5g.95<U<Tx5UA<x5g.E5<P<Yr5KA<+5Z.E5<K<dxF<,5Z45.45<P<~<.r5U95,5<K<-<.l5UE5+5<P<]<.l5PE5+5<P<;<.g5PK5lL<U<;<.g5PK5g5<r<.3<.Z5PP5Z5<r<.3<.g5KP5Z5<r<.8<.Z5KU5U5<r<.8<.Z5KU5U5<r<.8<.Z5KZ5P5<x<.3<.Z5Kg5E5<!<.3<.Z5Kl595<^<;<.Z5KlA<+~P<3<.Z5KrA<{dr.-<.Z5Kx5<.9D+.~<.Z5K!5>4.q<.g5K!5>E.Y<.l5K^5>K.D<.r5P+5>U]<.r5U{5>rY<.!5Z+5/rAg^5/r5r!5/r5xx5/r5!!5/g5^^5/U5++5/K5{+5/E5,^5/E5.4^5/95.9!5/95.E!5/45.K!5><.,5.P!5><.,5.P!5><.{5.UgL><.,5.UUA/K5.UU5/K5.ZU5/K5.ZU5/K5.ZU5/K5.ZP5><gs.E5.gP5><g5l5.E5.gP5><g5l5.E5.gP5><g5l5.95.lK5><l5l5.95.lK5><ls.95.lK5/K5.lK5/E5.rK5/E5.rE5/K5.rE5/K5.rE5/E5.xE5/E5.xE5/E5.xE5/E5.xE5/95.!K5/45.!K5/45.!K5/45.!K5/45.!K5><.,5.^P5><.{5.^P5><.{5.^P5><.{5.^U5><.+5.^U5><.^5.+U5><.^5.+Z5<._.+<15.+';
