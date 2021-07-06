window.logic5 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!cmd_isset(5)) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_set_horizon(0);
        cmd_status_line_on();
        cmd_accept_input();
        if (!!cmd_isset(173)) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_load_view(226);
        cmd_set_view(226, 226);
        cmd_set_loop(226, 1);
        cmd_position(226, 89, 139);
        cmd_set_priority(226, 14);
        cmd_ignore_objs(226);
        cmd_normal_cycle(226);
        cmd_assignn(80, 4);
        cmd_cycle_time(226, 80);
        cmd_draw(226);
      case 501:
        cmd_load_view(51);
        cmd_animate_obj(51);
        cmd_set_view(51, 51);
        cmd_position(51, 134, 65);
        cmd_set_priority(51, 7);
        cmd_ignore_blocks(51);
        cmd_ignore_objs(51);
        cmd_assignn(80, 2);
        cmd_cycle_time(51, 80);
        cmd_draw(51);
        cmd_load_view(52);
        cmd_animate_obj(52);
        cmd_set_view(52, 52);
        cmd_set_cel(52, 0);
        cmd_position(52, 115, 132);
        cmd_ignore_blocks(52);
        cmd_ignore_objs(52);
        cmd_stop_cycling(52);
        cmd_draw(52);
        if (!cmd_equaln(1, 6)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_position(0, 96, 54);
        jumpTo(2);
        break logicSwitch;
      case 502:
        if (!cmd_equaln(1, 2)) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_assignn(80, 0);
        if (!cmd_lessn(33, 124)) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(33, 124);
        jumpTo(1);
        break logicSwitch;
      case 504:
        if (!cmd_greatern(33, 160)) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(33, 160);
      case 505:
      case 1:
        cmd_position_v(0, 80, 33);
        jumpTo(2);
        break logicSwitch;
      case 503:
        if (!cmd_equaln(1, 10)) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_position(0, 116, 134);
        jumpTo(2);
        break logicSwitch;
      case 506:
        cmd_position(0, 120, 140);
      case 2:
        cmd_load_sound(5);
        cmd_sound(5, 147);
        cmd_draw(0);
        cmd_show_pic();
      case 500:
        if (!cmd_isset(134) && cmd_isset(147)) {
          cmd_reset(147);
          cmd_sound(5, 147);
        }
      case 2800:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m1);
              cmd_print(m2);
              jumptoLineArray = [2800, 28000];
              ifSkipArray = [true];
              jumpTo(2800, 5);
              break logic;
            case 28000:
              if (!cmd_isset(173)) {
                cmd_print(m3);
                jumptoLineArray = [2800, 28001];
                ifSkipArray = [true];
                jumpTo(2800, 5);
                break logic;
              }
            case 28001:
              if (cmd_isset(124)) {
                cmd_print(m4);
                jumptoLineArray = [2800, 28002];
                ifSkipArray = [true];
                jumpTo(2800, 5);
                break logic;
              }
            case 28002:
          }
        }
        if (cmd_said(15, 67) || cmd_said(15, 27)) {
          cmd_print(m5);
          jumptoLineArray = [2803];
          jumpTo(2803, 5);
          break logic;
        }
      case 2803:
        if (cmd_said(15, 68)) {
          cmd_print(m2);
          jumptoLineArray = [2804];
          jumpTo(2804, 5);
          break logic;
        }
      case 2804:
      case 2805:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 69) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m6);
              jumptoLineArray = [2805, 28000];
              ifSkipArray = [true];
              jumpTo(2805, 5);
              break logic;
            case 28000:
              if (cmd_isset(124)) {
                cmd_print(m4);
                jumptoLineArray = [2805, 28001];
                ifSkipArray = [true];
                jumpTo(2805, 5);
                break logic;
              }
            case 28001:
          }
        }
      case 2807:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 70) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m7);
              jumptoLineArray = [2807, 28000];
              ifSkipArray = [true];
              jumpTo(2807, 5);
              break logic;
            case 28000:
              if (cmd_isset(124)) {
                cmd_print(m4);
                jumptoLineArray = [2807, 28001];
                ifSkipArray = [true];
                jumpTo(2807, 5);
                break logic;
              }
            case 28001:
          }
        }
      case 2809:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 71) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(173)) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m8);
                    jumptoLineArray = [2809, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2809, 5);
                    break logic;
                  case 280000:
                    jumpTo(3);
                    break logicSwitch;
                }
              }
              cmd_print(m9);
              jumptoLineArray = [2810];
              jumpTo(2810, 5);
              break logic;
          }
        }
      case 2810:
      case 3:
        if (cmd_said(15, 43)) {
          cmd_print(m10);
          jumptoLineArray = [2811];
          jumpTo(2811, 5);
          break logic;
        }
      case 2811:
        if (cmd_said(15, 39)) {
          cmd_print(m11);
          jumptoLineArray = [2812];
          jumpTo(2812, 5);
          break logic;
        }
      case 2812:
        if (cmd_said(15, 72) || cmd_said(15, 73)) {
          cmd_print(m12);
          jumptoLineArray = [2813];
          jumpTo(2813, 5);
          break logic;
        }
      case 2813:
        if (cmd_said(15, 31)) {
          cmd_print(m13);
          jumptoLineArray = [2814];
          jumpTo(2814, 5);
          break logic;
        }
      case 2814:
        if (cmd_said(15, 33)) {
          cmd_print(m14);
          jumptoLineArray = [2815];
          jumpTo(2815, 5);
          break logic;
        }
      case 2815:
        if (cmd_said(15, 34)) {
          cmd_print(m15);
          jumptoLineArray = [2816];
          jumpTo(2816, 5);
          break logic;
        }
      case 2816:
        if (cmd_said(15, 35)) {
          cmd_print(m16);
          jumptoLineArray = [2817];
          jumpTo(2817, 5);
          break logic;
        }
      case 2817:
        if (cmd_said(15, 36)) {
          cmd_print(m17);
          jumptoLineArray = [2818];
          jumpTo(2818, 5);
          break logic;
        }
      case 2818:
        if (cmd_said(15, 38)) {
          cmd_print(m18);
          cmd_print(m19);
          jumptoLineArray = [2819];
          jumpTo(2819, 5);
          break logic;
        }
      case 2819:
        if (cmd_said(15, 39)) {
          cmd_print(m20);
          jumptoLineArray = [2820];
          jumpTo(2820, 5);
          break logic;
        }
      case 2820:
        if (cmd_said(15, 40)) {
          cmd_print(m21);
          jumptoLineArray = [2821];
          jumpTo(2821, 5);
          break logic;
        }
      case 2821:
      case 2822:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 70) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(124) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m22);
                    jumptoLineArray = [2822, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2822, 5);
                    break logic;
                  case 280000:
                    jumpTo(4);
                    break logicSwitch;
                }
              }
              cmd_print(m23);
              jumptoLineArray = [2823];
              jumpTo(2823, 5);
              break logic;
          }
        }
      case 2823:
      case 4:
        if (cmd_isset(124) && (cmd_said(15, 70, 19) || cmd_said(15, 19))) {
          cmd_print(m22);
          jumptoLineArray = [2824];
          jumpTo(2824, 5);
          break logic;
        }
      case 2824:
        if (cmd_isset(0)) {
          cmd_load_view(6);
          cmd_set_view(0, 6);
          jumpTo(5);
          break logicSwitch;
        }
        cmd_set_view(0, 0);
      case 5:
        if (cmd_said(26, 67, 44) || cmd_said(26, 44)) {
          if (cmd_center_posn(0, 112, 132, 122, 134)) {
            cmd_get_posn(0, 30, 31);
            cmd_load_view(58);
            cmd_set_view(1, 58);
            cmd_set_loop(1, 0);
            cmd_set_cel(1, 0);
            cmd_position_v(1, 30, 31);
            cmd_get_priority(0, 84);
            cmd_increment(84);
            cmd_set_priority_v(1, 84);
            cmd_ignore_blocks(1);
            cmd_ignore_objs(1);
            cmd_erase(0);
            cmd_draw(1);
            cmd_end_of_loop(1, 82);
            jumpTo(6);
            break logicSwitch;
          }
          cmd_print(m24);
          jumptoLineArray = [2825];
          jumpTo(2825, 5);
          break logic;
        }
      case 2825:
      case 6:
        if (cmd_isset(82)) {
          cmd_reset(82);
          cmd_end_of_loop(52, 70);
          if (!cmd_isset(174)) {
            cmd_set(174);
            cmd_increment(3);
          }
        }
        if (cmd_isset(70)) {
          cmd_reset(70);
          cmd_reset(124);
          cmd_new_room(10);
          if (AGI.break_all_logics) return;
        }
        if (!cmd_isset(71) && cmd_center_posn(0, 90, 54, 112, 54)) {
          cmd_get_dir(0, 80);
          if (cmd_equaln(80, 1) || cmd_equaln(80, 2) || cmd_equaln(80, 8)) {
            cmd_get_posn(0, 30, 31);
            cmd_load_view(54);
            cmd_animate_obj(54);
            cmd_set_view(54, 54);
            cmd_last_cel(0, 80);
            cmd_decrement(80);
            cmd_set_cel_v(54, 80);
            cmd_subn(31, 2);
            cmd_position_v(54, 30, 31);
            cmd_ignore_blocks(54);
            cmd_draw(54);
            cmd_assignn(80, 2);
            cmd_cycle_time(54, 80);
            cmd_end_of_loop(54, 72);
            cmd_erase(0);
            cmd_set(71);
          }
        }
        if (cmd_isset(72)) {
          cmd_reset(72);
          cmd_load_view(53);
          cmd_animate_obj(53);
          cmd_set_view(53, 53);
          cmd_position(53, 97, 53);
          cmd_ignore_blocks(53);
          cmd_ignore_objs(53);
          cmd_assignn(80, 2);
          cmd_cycle_time(53, 80);
          cmd_assignn(80, 2);
          cmd_step_time(53, 80);
          cmd_draw(53);
          cmd_end_of_loop(53, 73);
        }
        if (cmd_isset(73)) {
          cmd_reset(73);
          cmd_set_loop(53, 1);
          cmd_normal_cycle(53);
          cmd_assignn(80, 2);
          cmd_cycle_time(53, 80);
          cmd_move_obj(53, 95, 46, 0, 74);
        }
        if (cmd_isset(74)) {
          cmd_reset(74);
          cmd_move_obj(53, 81, 44, 0, 75);
        }
        if (cmd_isset(75)) {
          cmd_reset(75);
          cmd_move_obj(53, 76, 34, 0, 76);
        }
        if (cmd_isset(76)) {
          cmd_reset(76);
          cmd_erase(53);
          cmd_reset(124);
          cmd_new_room(6);
          if (AGI.break_all_logics) return;
        }
        if (!cmd_said(50, 71)) {
          jumpTo(507);
          break logicSwitch;
        }
        if (!cmd_obj_in_room(i7, 0)) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!cmd_center_posn(0, 80, 148, 96, 160)) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_increment(3);
        cmd_print(m25);
        jumptoLineArray = [2826];
        jumpTo(2826, 5);
        break logic;
      case 2826:
        cmd_get(i7);
        cmd_erase(226);
        cmd_show_obj(226);
        jumptoLineArray = [2827];
        jumpTo(2827, 5);
        break logic;
      case 2827:
        if (!!cmd_isset(173)) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_set(173);
        cmd_increment(3);
      case 510:
        jumpTo(7);
        break logicSwitch;
      case 509:
        cmd_print(m26);
        jumptoLineArray = [2828];
        jumpTo(2828, 5);
        break logic;
      case 2828:
      case 7:
        jumpTo(8);
        break logicSwitch;
      case 508:
        cmd_print(m27);
        jumptoLineArray = [2829];
        jumpTo(2829, 5);
        break logic;
      case 2829:
      case 507:
      case 8:
        if (cmd_said(50, 69)) {
          cmd_print(m28);
          jumptoLineArray = [2830];
          jumpTo(2830, 5);
          break logic;
        }
      case 2830:
      case 2831:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(50, 70, 19) || cmd_said(50, 19) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_has(i14) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m29);
                    cmd_print(m30);
                    jumptoLineArray = [2831, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2831, 5);
                    break logic;
                  case 280000:
                    jumpTo(9);
                    break logicSwitch;
                }
              }
              if (cmd_isset(124)) {
                cmd_set(81);
                jumpTo(9);
                break logicSwitch;
              }
              cmd_print(m31);
              jumptoLineArray = [2832];
              jumpTo(2832, 5);
              break logic;
          }
        }
      case 2832:
      case 9:
        if (!(cmd_isset(81) || cmd_said(50, 70))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_reset(81);
        if (!cmd_has(i14)) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_print(m32);
        jumptoLineArray = [2833];
        jumpTo(2833, 5);
        break logic;
      case 2833:
        jumpTo(11);
        break logicSwitch;
      case 512:
        if (!cmd_center_posn(0, 126, 136, 154, 158)) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        cmd_get_posn(0, 30, 31);
        if (!cmd_greatern(31, 144)) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_move_obj(0, 134, 145, 1, 77);
        jumpTo(10);
        break logicSwitch;
      case 514:
        cmd_move_obj(0, 134, 143, 1, 77);
      case 10:
        jumpTo(11);
        break logicSwitch;
      case 513:
        cmd_print(m33);
        jumptoLineArray = [2834];
        jumpTo(2834, 5);
        break logic;
      case 2834:
      case 511:
      case 11:
        if (cmd_isset(77)) {
          cmd_reset(77);
          cmd_set_loop(0, 0);
          cmd_set_cel(0, 3);
          cmd_set(78);
          cmd_get_posn(0, 30, 31);
          cmd_load_view(55);
          cmd_set_view(1, 55);
          cmd_set_loop_v(1, 86);
          cmd_set_cel(1, 0);
          cmd_subn(30, 4);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          if (cmd_greatern(31, 144)) {
            cmd_increment(84);
          }
          cmd_set_priority_v(1, 84);
          cmd_normal_cycle(1);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_end_of_loop(1, 79);
        }
      case 2835:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(78) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_current_cel(1, 87);
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_equaln(87, 9) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_stop_cycling(1);
                    cmd_reset(78);
                    cmd_get(i13);
                    if (cmd_isset(175)) {
                      cmd_set(80);
                      cmd_set_loop(254, 2);
                      cmd_set_cel(254, 0);
                      cmd_end_of_loop(254, 133);
                      jumpTo(12);
                      break logicSwitch;
                    }
                    cmd_show_obj(232);
                    jumptoLineArray = [2835, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2835, 5);
                    break logic;
                  case 280000:
                    cmd_start_cycling(1);
                }
              }
          }
        }
      case 12:
      case 2836:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(80) && cmd_isset(133)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(80);
              cmd_reset(124);
              cmd_get(i14);
              cmd_show_obj(233);
              jumptoLineArray = [2836, 28000];
              ifSkipArray = [true];
              jumpTo(2836, 5);
              break logic;
            case 28000:
              if (!cmd_isset(176)) {
                cmd_set(176);
                cmd_increment(3);
              }
              cmd_start_cycling(1);
              cmd_reverse_loop(57, 100);
          }
        }
        if (cmd_isset(79)) {
          cmd_reset(78);
          cmd_reset(79);
          cmd_erase(1);
          cmd_draw(0);
          cmd_accept_input();
          cmd_player_control();
        }
        if (cmd_equaln(2, 4)) {
          cmd_reset(124);
          cmd_new_room(2);
          if (AGI.break_all_logics) return;
        }
        return;
    }
  }
};
MESSAGES[5] = [
  '',
  'This is where the sidewalk ends. From here a dirt path endures further into the distance. A friendly neighbor of yours resides inside the large box.',
  "You need to find out who's his landscaper. What a nice job!",
  'Just outside the box, an abandoned balloon quietly resists the wind.',
  'There is an Earth Elemental taking some time to smell the roses.',
  "Your neighbor's house. An inviting door flap beckons you.",
  'You admire the garden... What a lovely garden.',
  'This garden is a little too dirty for your taste.',
  'A lonely balloon yields to the breeze.',
  'Are you dreaming of a party for your lonely self?',
  "Water pools on the path. Don't worry it's not too deep.",
  'The path has to lead somewhere.',
  "A billowing chimney. Wondering when the last time it was swept? Don't.",
  'Looks like a dream.',
  'A rock. If only there was a hard place then you cloud try to fit in between the two. Luckily, there is not.',
  "It's blue (da ba dee).",
  'Happy little clouds frolicking around that oh so majestic mountaintop. One word: picturesque.',
  'The snow capped mountain sits off beyond the rolling hills. It sure is nice to see something other than just blue sky.',
  'They keep rolling and rolling and rolling...',
  'Oh wait, there is a path you can take. Roll on!',
  'It must lead somewhere.',
  "You feel that it's beneath you.",
  "A dirty, dirty Earth Elemental. Well, at least you could say it's well grounded.",
  "It's usually right under you!",
  "The door is not here. It's over there.",
  "You untie the balloon from it's post.",
  'If only you had longer arms, you could reach anything you wanted. Get closer.',
  'There is no balloon to get.',
  "You have no need for these flowers. But wouldn't it feel nice to run your hands through the dirt?",
  "You're already dirty enough!",
  'You could take a bath... But not here. Not now. Maybe in a sequel.',
  "You don't see that...",
  "You're already dirty enough! You could take a bath... But not here. Not now. Maybe in a sequel.",
  'The easiest way to reach the dirt is to be near it.',
];
CONTROLS[5] =
  '?4?4?4?4?4?4?4?4?4?4?4?4<.{L>.{<.!F9A>.,<.rAKA><4<.gAP595><4<.UAU595><9<.KAZ5E5><9<.9Al5E5><9<.45r5E5><E<{Ar5K5><E<+5!5E5><K<^5!5K5><K<!5^5E5><P<x5^5K5><P<r5+5K5><P<l5{5E5><U<g5{5K5><U<g5{5K5><U<Z5,5K5><U<U5,5K5><Z<P5.45K5><Z<K5.95K5><Z<K5.95K5><Z<E5.E5K5><Z<95.E5P5><Z<45.K5P5><Z<45.K5P5><Z.,5.P5P5><Z.,5.P5P5><Z.,5.P5P5><Z.{5.P5U5><Z.{5.P5P5><g.{5.P5P5><g.+5.U5P5><g.+5.U5P5><g.^5.Z5P5><g.^5.Z5P5><g.!5.gAK5><g.!5.g5P5><g.x5.l5P5><g.r5.r5P5><g.l5.x5P5><g.l5.x5P5<9.b<,.g5.!5P5.{G.gW<l54A.P5.^5P5.^B<4M<K59EA.95.+5U5.rB<ZG.,5EP5{A.{5U5.gB<!G.!5KP5^A<45UF.KB<.4B.l5PU5lF<E5U5EA,B<.PB.PBUUFKF<U5U5PA^6<.lB!6EMgU5EF<l5Z5U5rB<.!GUW!Z5<^5Z5ZAPG>4RK6+Z5<^5Z5lL>!6+Z5<^5Z5>.g6+Z5<^5g5>.Z6+Z5<^5g5>.Z6+g5<!5l5>.U6+g5<^5g5>rFr6+g5<^5l5>ZAKAg6+U595<^5l5>U5Z5g6+ZA<^5r5>Phg6+l5<^5l5>PAU5l5^rA<x5rA>Ehl5^!5<x5x5>9QE5l5^!5<x5!A<.,5Z5l5^^5<x5^F<.^5Z5l5^^5<!5^5<.+5PFl5^^5<^AlA<.{Q!5^+5<+APA>.45^+5<,L>.K5!+5>gJ<.^5!+5>Zk<.l5!+5>P%<.Z5!^5>P;<.P5!^5>K.8<.K5!^5>E.J<.E5!lAE5>4.T<.E5!xF<Za.E.d<.E5x+A<9FKAE5,.q<.E5x{5.{FPAP5+.%<.95x,5.xFKLg5x.]<.95x,5.lA.95l<8<.45x,5.g5.E5l<J<,5x,5.g5.95r<O<{5x.45.U5.E5r<T<+5x.45.KA.E5r<d<^5x.45.9A.P5r<d<+5r.45,A.U5x<k<^5r.45{5.UA!<k<^5r.95^5UA{5+<k<^5r.95!5U5E5^5{<k<^5r.95rAU5EFrA.4<k<!5r.95l5Z59aUA.E<k<!5r.95g5UhKQ.P<d<^5r.95Z5Ua.{<Y<{5l.E5P5UV<4<T<,5l.E5K5UQ<K<O<,5l.E5E5PAE5<U<J<.45l.E595P5EA<g<8<.95l.9A95K59A<r<3<.E5l.9FPA<^.]<.K5l.9FK5<{.%<.U5l.4a<.4.w<.Z5l4A{A<.Z.d<.l5l4L!A<.r.D<.^5gEFrA<.!->45gPAZF<.+w>E5gUm>4d>K5gZV>UD>U5g/gax5g/Z5g5r5g/U5l5r5g><{.BU5l5r5g><{6.46U5l5r5g><{6,6Z5l5r5g><{6,6g5Z5x5g><{6,6l5P5^5Z><+6.46rL+5Z><+6.46.x5Z><+6.46.x5Z><+6.46.x5Z><+.B.x5Z/.r5Z/.r5Z/.r5Z/.r5Z/.r5Z/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.x5U/.!5P><,A<x5P><{5EF<g5P><{5UA<U5P<.K5<EA.U5l5<P5P<.KFZL,5ZAl5!5x5.4A!AP5K5<.E5KAEAPF^A{595x5x5{AEAr595KL9<.E5UAl5!L!AK5l5^5^5ZAZ5KFU<.E5{5^59Fr5ZAPA{Ar5rAP5!<.95,5xAKLUAr59A.EFKF^A95^<.95,5r5Zh^5.gF.9A^<,A,5lA>.U.{A{5.9FPA>.g^F+A95ULKA.UL>.rxAKQUFP59FPF><.PlAxQgA><.{KQ/.l4F/.+';
