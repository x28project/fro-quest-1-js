window.logic2 = function () {
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
        cmd_set_horizon(37);
        if (!(cmd_equaln(1, 1) || cmd_equaln(1, 0) || cmd_equaln(1, 18))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
        cmd_position(0, 120, 140);
        cmd_status_line_on();
        cmd_accept_input();
        cmd_get(i17);
        jumpTo(1);
        break logicSwitch;
      case 501:
        cmd_load_sound(1);
        cmd_sound(1, 147);
      case 1:
        cmd_load_view(20);
        cmd_animate_obj(20);
        cmd_position(20, 65, 115);
        cmd_ignore_blocks(20);
        cmd_ignore_objs(20);
        cmd_set_view(20, 20);
        cmd_set_loop(20, 0);
        cmd_set_cel(20, 0);
        cmd_set_priority(20, 9);
        cmd_draw(20);
        cmd_stop_cycling(20);
        cmd_animate_obj(21);
        cmd_load_view(21);
        cmd_set_view(21, 21);
        cmd_set_loop(21, 0);
        cmd_position(21, 100, 154);
        cmd_normal_cycle(21);
        cmd_wander(21);
        cmd_draw(21);
        if (!cmd_equaln(1, 5)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_assignn(80, 159);
        if (!cmd_lessn(33, 124)) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_assignn(33, 124);
        jumpTo(2);
        break logicSwitch;
      case 503:
        if (!cmd_greatern(33, 160)) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(33, 160);
      case 504:
      case 2:
        jumpTo(3);
        break logicSwitch;
      case 502:
        if (!cmd_equaln(1, 3)) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 0);
        cmd_position(0, 36, 136);
        jumpTo(3);
        break logicSwitch;
      case 505:
        if (!cmd_equaln(1, 9)) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 0);
        cmd_position(0, 72, 114);
        cmd_set_cel(20, 3);
        cmd_reverse_loop(20, 61);
        jumpTo(3);
        break logicSwitch;
      case 506:
        if (!cmd_equaln(1, 7)) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_prevent_input();
        cmd_assignn(6, 0);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
        cmd_position(0, 152, 154);
        cmd_erase(21);
        cmd_erase(20);
        cmd_assignn(1, 17);
        cmd_load_pic(1);
        cmd_draw_pic(1);
        cmd_discard_pic(1);
        cmd_show_pic();
        cmd_print(m1);
        jumptoLineArray = [2800];
        jumpTo(2800, 2);
        break logic;
      case 2800:
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_draw(20);
        cmd_set(70);
        cmd_assignn(100, 0);
      case 507:
      case 3:
        cmd_draw(0);
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          cmd_reset(147);
          cmd_sound(1, 147);
        }
        if (cmd_said(15, 27)) {
          cmd_print(m2);
          jumptoLineArray = [2801];
          jumpTo(2801, 2);
          break logic;
        }
      case 2801:
        if (cmd_said(15, 28)) {
          cmd_print(m3);
          jumptoLineArray = [2802];
          jumpTo(2802, 2);
          break logic;
        }
      case 2802:
        if (cmd_said(15, 29) || cmd_said(15, 30)) {
          cmd_print(m4);
          cmd_print(m5);
          jumptoLineArray = [2803];
          jumpTo(2803, 2);
          break logic;
        }
      case 2803:
        if (cmd_said(15, 31)) {
          cmd_print(m6);
          jumptoLineArray = [2804];
          jumpTo(2804, 2);
          break logic;
        }
      case 2804:
        if (cmd_said(15, 32)) {
          cmd_print(m7);
          jumptoLineArray = [2805];
          jumpTo(2805, 2);
          break logic;
        }
      case 2805:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 33) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m8);
              jumptoLineArray = [2805, 28000];
              ifSkipArray = [true];
              jumpTo(2805, 2);
              break logic;
            case 28000:
              if (cmd_has(i2)) {
                cmd_print(m9);
                cmd_print(m10);
                jumptoLineArray = [2806];
                jumpTo(2806, 2);
                break logic;
              }
          }
        }
      case 2806:
        if (cmd_said(15, 34)) {
          cmd_print(m11);
          jumptoLineArray = [2807];
          jumpTo(2807, 2);
          break logic;
        }
      case 2807:
        if (cmd_said(15, 35)) {
          cmd_print(m12);
          jumptoLineArray = [2808];
          jumpTo(2808, 2);
          break logic;
        }
      case 2808:
        if (cmd_said(15, 36)) {
          cmd_print(m13);
          jumptoLineArray = [2809];
          jumpTo(2809, 2);
          break logic;
        }
      case 2809:
        if (cmd_said(15, 37)) {
          cmd_print(m14);
          jumptoLineArray = [2810];
          jumpTo(2810, 2);
          break logic;
        }
      case 2810:
        if (cmd_said(15, 38)) {
          cmd_print(m15);
          jumptoLineArray = [2811];
          jumpTo(2811, 2);
          break logic;
        }
      case 2811:
        if (cmd_said(15, 39)) {
          cmd_print(m16);
          jumptoLineArray = [2812];
          jumpTo(2812, 2);
          break logic;
        }
      case 2812:
        if (cmd_said(15, 40)) {
          cmd_print(m17);
          jumptoLineArray = [2813];
          jumpTo(2813, 2);
          break logic;
        }
      case 2813:
        if (cmd_said(15)) {
          cmd_print(m18);
          cmd_print(m19);
          jumptoLineArray = [2814];
          jumpTo(2814, 2);
          break logic;
        }
      case 2814:
        if (cmd_said(41, 29) || cmd_said(41, 30)) {
          cmd_load_view(202);
          cmd_animate_obj(202);
          cmd_set_view(202, 202);
          cmd_set_loop(202, 0);
          cmd_set_cel(202, 0);
          cmd_position(202, 5, 67);
          cmd_set_priority(202, 15);
          cmd_ignore_objs(202);
          cmd_assignn(91, 2);
          cmd_cycle_time(202, 91);
          cmd_draw(202);
          cmd_end_of_loop(202, 121);
          cmd_print(m20);
          jumptoLineArray = [2815];
          jumpTo(2815, 2);
          break logic;
        }
      case 2815:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(121) && cmd_equaln(77, 0)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(121);
              cmd_print(m21);
              jumptoLineArray = [2815, 28000];
              ifSkipArray = [true];
              jumpTo(2815, 2);
              break logic;
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(155) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m22);
                    cmd_print(m23);
                    jumptoLineArray = [2815, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2815, 2);
                    break logic;
                  case 280000:
                    cmd_set_loop(202, 0);
                    cmd_set_cel(202, 0);
                    cmd_end_of_loop(202, 121);
                    cmd_increment(77);
                }
              }
              jumpTo(4);
              break logicSwitch;
          }
        }
      case 2816:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(121) && cmd_equaln(77, 1)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(121);
              cmd_assignn(77, 0);
              if (!cmd_isset(155)) {
                cmd_print(m24);
                jumptoLineArray = [2816, 28000];
                ifSkipArray = [true];
                jumpTo(2816, 2);
                break logic;
              }
            case 28000:
              cmd_print(m25);
              jumptoLineArray = [2816, 28001];
              ifSkipArray = [true];
              jumpTo(2816, 2);
              break logic;
            case 28001:
              cmd_erase(202);
              if (!cmd_isset(154)) {
                cmd_set(154);
                cmd_increment(3);
              }
          }
        }
      case 4:
        if (
          !(
            cmd_said(42, 43, 29) ||
            cmd_said(42, 43, 30) ||
            cmd_said(42, 29, 43) ||
            cmd_said(42, 30, 43)
          )
        ) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!cmd_has(i6)) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_distance(0, 21, 81);
        if (!cmd_lessn(81, 20)) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_print(m26);
        cmd_print(m27);
        cmd_print(m28);
        jumptoLineArray = [2817];
        jumpTo(2817, 2);
        break logic;
      case 2817:
        cmd_drop(i6);
        cmd_set(64);
        jumpTo(5);
        break logicSwitch;
      case 510:
        cmd_print(m29);
        jumptoLineArray = [2818];
        jumpTo(2818, 2);
        break logic;
      case 2818:
      case 5:
        jumpTo(6);
        break logicSwitch;
      case 509:
        cmd_print(m30);
        jumptoLineArray = [2819];
        jumpTo(2819, 2);
        break logic;
      case 2819:
      case 508:
      case 6:
        if (cmd_isset(64)) {
          cmd_reset(64);
          cmd_get_posn(21, 82, 83);
          cmd_load_view(22);
          cmd_set_view(21, 22);
          cmd_set_loop(21, 0);
          cmd_set_cel(21, 0);
          cmd_subn(82, 3);
          cmd_position_v(21, 82, 83);
          cmd_normal_motion(21);
          cmd_stop_motion(21);
          cmd_end_of_loop(21, 65);
        }
        if (cmd_isset(65)) {
          cmd_reset(65);
          cmd_load_view(202);
          cmd_animate_obj(202);
          cmd_set_view(202, 202);
          cmd_set_loop(202, 0);
          cmd_set_cel(202, 0);
          cmd_position(202, 5, 67);
          cmd_set_priority(202, 15);
          cmd_ignore_objs(202);
          cmd_assignn(91, 2);
          cmd_cycle_time(202, 91);
          cmd_draw(202);
          cmd_end_of_loop(202, 121);
          cmd_assignn(77, 2);
        }
      case 2820:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(121) && cmd_equaln(77, 2)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(121);
              cmd_assignn(77, 0);
              cmd_print(m31);
              cmd_print(m32);
              jumptoLineArray = [2820, 28000];
              ifSkipArray = [true];
              jumpTo(2820, 2);
              break logic;
            case 28000:
              cmd_set_loop(21, 1);
              cmd_set_cel(21, 0);
              cmd_assignn(91, 4);
              cmd_cycle_time(21, 91);
              cmd_erase(202);
              cmd_end_of_loop(21, 66);
          }
        }
        if (cmd_isset(66)) {
          cmd_reset(66);
          cmd_set_view(21, 21);
          cmd_set_loop(21, 0);
          cmd_set_cel(21, 0);
          cmd_addn(82, 2);
          cmd_position_v(21, 82, 83);
          cmd_start_cycling(21);
          cmd_assignn(91, 2);
          cmd_cycle_time(21, 91);
          cmd_wander(21);
          if (!cmd_isset(155)) {
            cmd_set(155);
            cmd_increment(3);
          }
        }
        if (cmd_said(26, 44)) {
          if (cmd_center_posn(0, 60, 100, 79, 122)) {
            if (!cmd_isset(153)) {
              cmd_set(153);
              cmd_increment(3);
            }
            cmd_end_of_loop(20, 60);
            jumpTo(7);
            break logicSwitch;
          }
          cmd_print(m33);
          jumptoLineArray = [2821];
          jumpTo(2821, 2);
          break logic;
        }
      case 2821:
      case 7:
        if (cmd_isset(60)) {
          cmd_reset(60);
          cmd_new_room(9);
          if (AGI.break_all_logics) return;
        }
        if (!cmd_said(45, 28)) {
          jumpTo(511);
          break logicSwitch;
        }
        if (!cmd_center_posn(0, 0, 110, 40, 165)) {
          jumpTo(512);
          break logicSwitch;
        }
        if (!cmd_isset(200)) {
          jumpTo(513);
          break logicSwitch;
        }
        if (!!cmd_isset(152)) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_set(152);
        cmd_increment(3);
      case 514:
        cmd_get_posn(0, 30, 31);
        cmd_erase(0);
        cmd_animate_obj(1);
        cmd_load_view(3);
        cmd_set_view(1, 3);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 0);
        cmd_subn(30, 2);
        cmd_position_v(1, 30, 31);
        cmd_normal_cycle(1);
        cmd_ignore_blocks(1);
        cmd_ignore_objs(1);
        cmd_set_priority(1, 15);
        cmd_assignn(91, 2);
        cmd_cycle_time(21, 91);
        cmd_draw(1);
        cmd_stop_cycling(1);
        cmd_end_of_loop(1, 67);
        jumpTo(8);
        break logicSwitch;
      case 513:
        cmd_print(m34);
        cmd_print(m35);
        jumptoLineArray = [2822];
        jumpTo(2822, 2);
        break logic;
      case 2822:
        cmd_assignn(6, 3);
      case 8:
        jumpTo(9);
        break logicSwitch;
      case 512:
        cmd_print(m33);
        jumptoLineArray = [2823];
        jumpTo(2823, 2);
        break logic;
      case 2823:
      case 9:
        jumpTo(10);
        break logicSwitch;
      case 511:
        if (cmd_said(46, 28)) {
          cmd_print(m36);
          cmd_print(m37);
          cmd_print(m38);
          jumptoLineArray = [2824];
          jumpTo(2824, 2);
          break logic;
        }
      case 2824:
      case 10:
        if (cmd_isset(67)) {
          cmd_reset(67);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 68);
          cmd_assignn(60, 18);
          cmd_assignn(61, 120);
          cmd_assignn(62, 0);
          cmd_move_obj_v(1, 60, 61, 62, 62);
        }
        if (cmd_isset(62)) {
          cmd_reset(62);
          cmd_move_obj(1, 18, 129, 0, 63);
        }
        if (cmd_isset(63)) {
          cmd_reset(63);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 69);
        }
        if (cmd_isset(69)) {
          cmd_reset(69);
          cmd_new_room(3);
          if (AGI.break_all_logics) return;
        }
        if (cmd_isset(70)) {
          if (cmd_isset(70) && cmd_equaln(100, 0)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 148, 154, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 1)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 138, 153, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 2)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 128, 152, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 3)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 118, 151, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 4)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 108, 150, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 5)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 102, 146, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 6)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 96, 140, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 7)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 90, 132, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 8)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 84, 124, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 9)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 80, 118, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 10)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_move_obj(0, 74, 112, 1, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 11)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_end_of_loop(20, 70);
          }
          if (cmd_isset(70) && cmd_equaln(100, 12)) {
            cmd_increment(100);
            cmd_reset(70);
            cmd_new_room(16);
            if (AGI.break_all_logics) return;
          }
        }
      case 2825:
        ifSkip = ifSkipArrayShift();
        if (cmd_equaln(2, 2) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              if (cmd_isset(200)) {
                cmd_new_room(5);
                if (AGI.break_all_logics) return;
                jumpTo(11);
                break logicSwitch;
              }
              cmd_print(m39);
              cmd_print(m35);
              jumptoLineArray = [2825, 28000];
              ifSkipArray = [true];
              jumpTo(2825, 2);
              break logic;
            case 28000:
              cmd_assignn(6, 7);
              cmd_assignn(2, 0);
          }
        }
      case 11:
        return;
    }
  }
};
MESSAGES[2] = [
  '',
  'A short time later...',
  'Your house... In the middle of your yard.\n\nWith all the home improvements your buddy Al made to this place you think it would be worth more. Thanks a lot, Al!',
  "Ahh yes, the well. It is dry. You haven't had to use the well since you hooked up to public water and sewer. When was the last time you jumped down the well?",
  "It's your bodyguard. Wait...",
  'Are you really that important?',
  "All in all you're just another brick in the wall.",
  'Whoa!',
  'Some would say you actually live under there instead.',
  'Also, is that a rock in your pocket?',
  'Oh, it is. Okay, never mind.',
  "It's blue, but it's happy. Or is it?",
  'Happy little clouds frolicking around that oh so majestic mountaintop. One word: picturesque.',
  "The snow capped mountain is big enough that it's in plain sight.  Oh, and what a sight it is!",
  'Such a nice tree. It really increases your property value!',
  'They keep rolling and rolling and rolling...',
  'It leads to your front door!',
  "You feel that it's beneath you.",
  'The green pastures of this land roll on for miles. This is your house. In the middle of your yard. Everyday you wake to this same view. An old, unused well still lingers to the side.',
  'Your trusty bodyguard patrols the grounds. You can never be too safe!',
  'You speak to your hired help in the most affable manner without seeming too friendly,\n\n"Hello, Steve. What\'s new?"\n\nYou can never be too careful with employees.',
  '"Sir, the perimeter is secure."',
  'Sadly, you expected more from his answer. You press him further.\n\n"That\'s wonderful."\n"However, I should say... how are you, Steve, on this fine day?"',
  'Taken aback by your persistence he slowly responds,\n\n"Sir...',
  '"I am well. A little parched, but aside from that, I am well."',
  "You nod in acknowledgement of his response. That's it. You have done your good deed for the day. You are so nice!",
  'You are so kind.',
  'You say, "Steve, would you like a glass of water to quench your thirst?"',
  "You can't tell because of his mask, but it seems he's elated.",
  "Don't try to toss the glass of water to him. Get closer.",
  "It's not yours to give.",
  '"Thanks, Boss!"',
  'Yeah, he is obviously happy.',
  "You're not close enough.",
  'How can you think about going anywhere without your awesome hair pick?',
  'You must have left it at home.',
  "A well isn't for that. A well is for jumping in blindly!",
  'Wait!',
  "Don't try that at home.",
  'How can you think about going anywhere without your trusty hair pick?',
];
CONTROLS[2] =
  '?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4/.!AK/.rAE5E/.l5U59/.g5g5/.UAr/.KA!/.E5+/.95{/.45,<gF>!s+L.4l.0^FKAgm.+y^QxFlAK5.4g5.4FULlAEFrA.x5!AlA.E5UAU5.4g5.KQ{A{APsr5{AKF.U5EAg5.4Z5<.rLxFPA.9F.rAr5.4Z5>xL<.xA,Z5/x5{U5/x5,U5/x5,U5/r5.4U5/r5.4U5.r5><{5.9P5.r59A><^5.9P5.l5PA><r5.EP5.g5gA><g5.EP5.Z5xA><U5.EKA.U5+5><P5.EEA.U5,A><K5.9EA.P5.EA><E5.4EA.K5.UA>.,5.9EA.E5.l5>.+5.EK5.95.xA>.!5.EK5.45.+A>.l5.KK5.45.,A>.Z5.KK5,5<EA>.P5.KK5{5<U5>.K5.KK5+5<gA>.E5.EEA^5<xA<.Zs,A.EE5^5<+A<.K5r5,5.KE5!5<.4A<,A!5{5.KE5x5<.K5<+5{5^5.PE5r5<.UA<x5.45!5.P95r5<.lA<ZA.E5x5.P95l5<.!A<K5.U5r5.P95g5<.{5<95r5rAEAZ5.U95Z5>4m.lFUA95KQE5E5Z5.U95Z595>4a.!5K5P595l5E5U5.U95ZA95>9Q.!LU5E5l5E5P5.U95xA>9F<U595r595U5.PE5!A>95<Z595l59AU5.KE5+A<.{5<gFr595Z5.EE5,A<.!5<.U595U5.EE5.9A<.l5<.gAU5.EE5.KA<.U5>45.9E5.UA<.E5>95.9E5.g5<.46>E5.9K5.gA<+6>KA.4K5.rA<x6>U5.4K5.!A<g6>U5.9K5.+A<P6>U5.EK5.,A<96>Z5.EK5<9A.,6>U5.KK5<KA.^6>Z5.KK5<UA.r6>Z5.PK5<g5.g6>g5.K5K5<lA.P6>l5.E59P5<rA.96>r5.95EP5<!A{5>x5gFg5EP5<+A!5>!5g595Z5KP5<,Al5>^5EQE5Z5KP5<.9AU5>+FKAE5U5PP5<.KAE5>.r5K5UP5<.UA>.x5K5UP5/.E5E5UP5/.KAZP5/.K5gP5/.K5gP5/.!P5/.!KA/.!K5/.^K5/.^K5/.^KA/.!P5/.!P5,i/PP5+Bl6/KP5!B!6/EP5!6+6/9P5!6+6/9P5!6+6/9P5!6+6/9P5!6^6/EP5^6x6/KP5+6l6/PP5{i/UP5/.!P5<.!Q>.!P5<.x5U5>.xP5<.x5Z5>.rP5<.x5Z5>.rP5<.xAU5>.rKA<.!AEF>.rK5<.E5rV>.xK5<.9595xA>.^K5.!F.9AK5><gK5PA.P5K5,5ZA><UK5EAEL,5U5+5r5><PK595lA^5g5xA!5.ELlF>EP5!5x5r5l5+5,FK5UFKA>4.45gF!5KL,5KQPAg5K5l5PF<.l.95EL{L.KLU59Ar5E5xLKs<{.9F<.K5^A.^FZV.,><.UVUQZh+/UagQl/.lQK/.+F';
