window.logic89 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(141)) {
  cmd_reset(141);
  cmd_load_view(14);
  cmd_animate_obj(2);
  cmd_set_view(2, 14);
  cmd_set_loop(2, 0);
  cmd_set_cel(2, 0);
  cmd_ignore_blocks(2);
  cmd_position_v(2, 30, 31);
  cmd_get_priority(0, 84);
  cmd_set_priority_v(2, 84);
  cmd_draw(2);
  cmd_end_of_loop(2, 51);
}
if (cmd_isset(51)) {
  cmd_reset(51);
  cmd_set_loop(2, 1);
  cmd_set_cel(2, 0);
  cmd_end_of_loop(2, 52);
}
if (cmd_isset(52)) {
  cmd_reset(52);
  cmd_set_loop(2, 2);
  cmd_set_cel(2, 0);
  cmd_end_of_loop(2, 55);
}
if (cmd_isset(53)) {
  cmd_reset(53);
  cmd_set_loop(2, 3);
  cmd_set_cel(2, 0);
  cmd_end_of_loop(2, 54);
}
if (cmd_isset(54)) {
  cmd_reset(54);
  cmd_set_loop(2, 4);
  cmd_set_cel(2, 0);
  cmd_end_of_loop(2, 55);
}
if (cmd_isset(55)) {
  cmd_reset(55);
  cmd_set_loop(2, 5);
  cmd_set_cel(2, 0);
  cmd_end_of_loop(2, 56);
}
if (cmd_isset(56)) {
  cmd_reset(56);
  cmd_reset(105);
  cmd_erase(2);
  cmd_set_loop(0, 2);
  cmd_set_cel(0, 0);
  cmd_draw(0);
  cmd_assignn(6, 0);
  if (!cmd_has(i8)) {
    cmd_get(i8);
  }
  if (cmd_equaln(1,14)) {
    cmd_set(183);
  }
  cmd_player_control();
  cmd_accept_input();
  cmd_assignn(35, 0);
}
return;

}}}
